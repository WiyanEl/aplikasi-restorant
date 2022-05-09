<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="hero">
    <!-- Dekstok Device -->
    <div class="d-none d-md-block">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h2>
              <strong>Delicious Food Menu,</strong> <br />
              in Your Gadget!
            </h2>
            <p>Ayo segera pilih dan pesan makanan favorit Anda!</p>
            <router-link to="/foods" class="btn btn-success border-0"><i class="bi bi-arrow-right"></i> Pesan</router-link>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" alt="Gambar Hero" class="img-fluid img-hero" />
        </div>
      </div>
    </div>
    <!-- Desktop Device -->

    <!-- Mobile Device -->
    <div class="d-sm-block d-md-none">
      <div class="row">
        <div class="col-md-6 text-center mt-4">
          <img src="../assets/images/hero.png" alt="Gambar Hero" class="img-fluid img-hero" />
        </div>
        <div class="col-md-6 d-flex align-items-center mt-4">
          <div>
            <h2>
              <strong>Delicious Food Menu,</strong> <br />
              in Your Gadget!
            </h2>
            <p>Ayo segera pilih dan pesan makanan favorit Anda!</p>
            <router-link to="/foods" class="btn btn-success border-0"><i class="bi bi-arrow-right"></i> Pesan</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Device -->
  </div>
</template>
