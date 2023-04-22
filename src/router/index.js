// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layouts/impressum/Impressum.vue'),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: '',
        name: 'Personal Info',
        component: () => import('@/views/PersonalInfo.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'projects',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Projects',
        component: () => import('@/views/Default.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
