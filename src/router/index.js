import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/add-member',
    name: 'AddMember',
    component: () => import('../views/AddMember.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router