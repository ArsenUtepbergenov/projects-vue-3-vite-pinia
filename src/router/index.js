import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'animate__animated animate__fadeOutRight'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router