import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersTable from "../views/UsersTable.vue";
import UsersDataTable from "../views/UsersDataTable.vue";
import HelloWorld from "../views/HelloWorld.vue";
import Counter from "../views/Counter.vue";
import Carousel from "../views/Carousel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "hello-world",
      component: HelloWorld,
    },
    {
      path: "/counter",
      name: "counter",
      component: Counter,
    },
    {
      path: "/carousel",
      name: "carousel",
      component: Carousel,
    },

    {
      path: "/users-table",
      name: "users-table",
      component: UsersTable,
    },
    {
      path: "/users-data-table",
      name: "users-data-table",
      component: UsersDataTable,
    },
  ],
});

export default router;
