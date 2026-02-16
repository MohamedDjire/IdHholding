import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import GroupePage from '../views/GroupePage.vue'
import IdPetroliumPage from '../views/IdPetroliumPage.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: HomePage,
  },
  {
    path: '/groupe',
    name: 'Groupe',
    component: GroupePage,
  },
  {
    path: '/groupe/id-petrolium',
    name: 'ID Petrolium',
    component: IdPetroliumPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
