<script>
import { RouterLink } from "vue-router";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import CardProductComponent from "@/components/CardProductComponent.vue";
import axios from "axios";

export default {
  components: {
    NavbarComponent,
    HeroComponent,
    CardProductComponent,
  },
  data() {
    return {
      products: {},
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3004/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="container">
    <HeroComponent />
    <div class="row mt-3">
      <div class="col">
        <h2>Best <strong>Foods</strong></h2>
      </div>
      <div class="col">
        <router-link to="/foods" class="btn btn-success border-0 float-end"><i class="bi bi-eye"></i> Lihat Semua</router-link>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <CardProductComponent :product="product" />
      </div>
    </div>
  </div>
</template>
