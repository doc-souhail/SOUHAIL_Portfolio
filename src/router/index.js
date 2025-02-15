import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from "@/views/WorksView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        showFooter: false,
      },

    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
      meta: {
        showFooter: true,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        showFooter: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        showFooter: true,
      }
    },
  ],
})


export default router

