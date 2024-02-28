import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildingPageView from "@/views/BuildingPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: BuildingPageView
    },
    {
      path: '/projects',
      name: 'projects',
      component: BuildingPageView
    },
    {
      path: '/about',
      name: 'about',
      component: BuildingPageView
    }
  ]
})

export default router
