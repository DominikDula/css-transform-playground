import Vue from "vue";
import VueRouter from "vue-router";
import TransformPanel from "../views/TransformPanel.vue";
import BoxShadowPanel from "../views/BoxShadowPanel.vue";
import BorderRadiusPanel from "../views/BorderRadiusPanel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TransformPanel",
    component: TransformPanel
  },
  {
    path: "/box-shadow",
    name: "BoxShadowPanel",
    component: BoxShadowPanel
  },
  {
    path: "/border-radius",
    name: "BorderRadiusPanel",
    component: BorderRadiusPanel
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
