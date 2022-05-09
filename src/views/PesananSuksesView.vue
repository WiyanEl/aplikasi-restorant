<script>
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";

export default {
  components: {
    NavbarComponent,
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col text-center">
        <img src="../assets/images/menunggu.png" alt="Gambar Hero" class="img-fluid img-hero" width="300" />
        <h4><strong>Sukses!!</strong></h4>
        <h4>Pesanan Anda segera diproses <br />Selamat menunggu</h4>
      </div>
    </div>
  </div>
</template>
