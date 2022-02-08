import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: import('@/pages/login/index.vue')
  },
  {
    path: '/main',
    component: import('@/pages/main/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
