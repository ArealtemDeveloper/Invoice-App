import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import InvoiceView from '../views/InvoiceView.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
