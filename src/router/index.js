import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ftbot from '../components/Ft-bot.vue'
import Dbbot from '../components/Db-bot.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Ftbot',
    name: 'Ftbot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Ftbot
  },
  {
    path: '/Dbbot',
    name: 'Dbbot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dbbot
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
