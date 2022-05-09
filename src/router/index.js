import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import KeranjangView from "../views/KeranjangView.vue";
import FoodDetailView from "../views/FoodDetailView.vue";
import PesananSuksesView from "../views/PesananSuksesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/foods",
      name: "foods",
      component: FoodsView,
    },
    {
      path: "/keranjang",
      name: "keranjang",
      component: KeranjangView,
    },
    {
      path: "/foods/:id",
      name: "detail food",
      component: FoodDetailView,
    },
    {
      path: "/pesanan-sukses",
      name: "pesanan sukses",
      component: PesananSuksesView,
    },
  ],
});

export default router;
