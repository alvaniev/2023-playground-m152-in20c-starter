import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersTable from '../views/UsersTable.vue'
import UsersDataTable from '../views/UsersDataTable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users-table',
      name: 'users-table',
      component: UsersTable
    },    {
      path: '/users-data-table',
      name: 'users-data-table',
      component: UsersDataTable
    },
  ]
})

export default router
