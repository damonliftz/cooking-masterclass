import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Catalogue from '../views/Catalogue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router