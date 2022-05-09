<script>
import CardProductComponent from "@/components/CardProductComponent.vue";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import axios from "axios";

export default {
  components: {
    NavbarComponent,
    CardProductComponent,
  },
  data() {
    return {
      products: {},
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3004/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3004/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="container">
    <div class="row mb-2">
      <div class="col">
        <h2>Daftar <strong>Makanan</strong></h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <input v-model="search" type="text" class="form-control" placeholder="Cari makanan favorit Anda.." aria-describedby="basic-addon1" @keyup="searchFood()" />
          <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <CardProductComponent :product="product" />
      </div>
    </div>
  </div>
</template>
