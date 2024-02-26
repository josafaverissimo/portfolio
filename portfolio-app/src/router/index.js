import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from "@/views/ContactsView.vue";

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
      component: ContactsView
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: HomeView
    }
  ]
})

export default router