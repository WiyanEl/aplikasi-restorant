<script>
import { RouterView } from "vue-router";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
  },
};
</script>

<template>
  <RouterView />
  <FooterComponent />
</template>
