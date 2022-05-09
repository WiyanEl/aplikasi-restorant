<script>
import NavbarComponent from "../components/layouts/NavbarComponent.vue";
import axios from "axios";

export default {
  components: {
    NavbarComponent,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3004/keranjangs/" + id)
        .then(() => {
          this.$toast.error("Berhasil menghapus makanan", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          axios
            .get("http://localhost:3004/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("http://localhost:3004/pesanans", this.pesan)
          .then(() => {
            this.keranjangs.map(function (item) {
              axios.delete("http://localhost:3004/keranjangs/" + item.id).catch((error) => console.log(error));
            });
            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Berhasil memesan makanan", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => console.log(error));
      } else {
        this.$toast.error("Nama dan nomer meja wajib diisi!", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3004/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((items, data) => {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<template>
  <NavbarComponent :updateKeranjang="keranjangs" />
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-dark text-decoration-none">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/foods" class="text-dark text-decoration-none">Foods</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Keranjang <strong>Saya</strong></h2>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Gambar</th>
                <th scope="col">Makanan</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Total</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                <th>{{ index + 1 }}</th>
                <td>
                  <img :src="'../assets/images/' + keranjang.products.gambar" :alt="keranjang.products.nama" class="img-fluid shadow img-detail-food" width="200" />
                </td>
                <td>
                  <strong>{{ keranjang.products.nama }}</strong>
                </td>
                <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                <td>{{ keranjang.jumlah_pemesanan }}</td>
                <td>Rp. {{ keranjang.products.harga }}</td>
                <td>Rp. {{ keranjang.products.harga * keranjang.jumlah_pemesanan }}</td>
                <td>
                  <button class="btn btn-transparent text-danger" @click="hapusKeranjang(keranjang.id)"><i class="bi bi-trash"></i></button>
                </td>
              </tr>
              <tr>
                <td colspan="6" class="text-end"><strong>Total Harga :</strong></td>
                <td>
                  <strong>Rp. {{ totalHarga }}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row justify-content-end">
          <div class="col-md-4">
            <form action="" class="mt-3" v-on:submit.prevent>
              <div class="mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input type="text" v-model="pesan.nama" class="form-control" id="nama" placeholder="Nama Pemesan" />
              </div>
              <div class="mb-3">
                <label for="noMeja" class="form-label">Nomor Meja</label>
                <input type="text" v-model="pesan.noMeja" class="form-control" id="noMeja" placeholder="Nomor Meja" />
              </div>
              <div class="mb-3 text-end">
                <button type="submit" class="btn btn-success border-0" @click="checkout"><i class="bi bi-bag-plus"></i> Pesan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
