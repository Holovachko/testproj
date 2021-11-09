import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserIdPage from '@/views/UserIdPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/:id',
    component: UserIdPage
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
