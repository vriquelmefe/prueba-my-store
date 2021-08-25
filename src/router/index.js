import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue"),
  },
  {
    path: "/newproduct",
    name: "NewProduct",
    component: () => import(/* webpackChunkName: "newProduct" */ "../views/NewProduct.vue"),
  },
  {
    path: "/busqueda",
    name: "Busqueda",
    component: () => import(/* webpackChunkName: "Busqueda" */ "../views/Busqueda.vue"),
  },
  {
    path: "/carritocompras",
    name: "CarritoCompras",
    component: () => import(/* webpackChunkName: "Carrito" */ "../views/CarritoCompras.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
