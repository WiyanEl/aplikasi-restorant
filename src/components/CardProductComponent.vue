<script>
import { RouterLink } from "vue-router";

export default {
  props: ["product"],
};
</script>

<template>
  <div class="card shadow card-product">
    <img :src="'public/assets/images/' + product.gambar" class="card-img-top" :alt="product.nama" />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Rp. {{ product.harga }}</p>
      <router-link :to="'/foods/' + product.id" class="btn btn-success border-0"><i class="bi bi-bag-plus"></i> Pesan</router-link>
    </div>
  </div>
</template>
