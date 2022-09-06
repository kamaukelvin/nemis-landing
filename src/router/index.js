import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/learn",
    name: "learn",
    component: () => import("../views/LearnView.vue"),
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("../views/DiscoverView.vue"),
  },
  {
    path: "/engage",
    name: "engage",
    component: () => import("../views/EngageView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
