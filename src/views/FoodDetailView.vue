<script>
import { RouterLink } from "vue-router";
import axios from "axios";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },
  data() {
    return {
      products: {},
      pesan: {},
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.products;
        axios
          .post("http://localhost:3004/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Berhasil menambahkan ke keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => console.log(error));
      } else {
        this.$toast.error("Anda harus memasukan jumlah pemesanan!", {
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
      .get("http://localhost:3004/products/" + this.$route.params.id)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<template>
  <NavbarComponent />
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
            <li class="breadcrumb-item active" aria-current="page">Order Detail</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img :src="'../assets/images/' + products.gambar" :alt="products.nama" class="img-fluid shadow img-detail-food" />
      </div>
      <div class="col-md-6">
        <h2>{{ products.nama }}</h2>
        <hr />
        <h3>
          Harga : <strong>Rp {{ products.harga }}</strong>
        </h3>
        <form action="" class="mt-3" v-on:submit.prevent>
          <div class="mb-3">
            <label for="jumlah" class="form-label">Jumlah</label>
            <input type="number" v-model="pesan.jumlah_pemesanan" class="form-control" id="jumlah" placeholder="Jumlah pemesanan" />
          </div>
          <div class="mb-3">
            <label for="keterangan" class="form-label">Keterangan</label>
            <textarea v-model="pesan.keterangan" id="keterangan" class="form-control" placeholder="Keterangan pemesanan"></textarea>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-success border-0" @click="pemesanan"><i class="bi bi-bag-plus"></i> Pesan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
