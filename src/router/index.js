// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Accueil - ID Holding International'
    }
  },
  {
    path: '/a-propos',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
    meta: {
      title: 'À Propos - ID Holding International'
    }
  },
  {
    path: '/activites',
    name: 'Services',
    component: () => import('@/views/ServicesPage.vue'),
    meta: {
      title: 'Nos Activités - ID Holding International'
    }
  },
  {
    path: '/parc-automobile',
    name: 'Fleet',
    component: () => import('@/views/FleetPage.vue'),
    meta: {
      title: 'Notre Parc Automobile - ID Holding International'
    }
  },
  {
    path: '/contacts',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue'),
    meta: {
      title: 'Contactez-nous - ID Holding International'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'ID Holding International'
  next()
})

export default router
