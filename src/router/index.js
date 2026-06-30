import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartPanel from '@/components/cart/CartPanel.vue'
import FemininoView from '@/components/layout/FemininoView.vue'
import MasculinoView from '@/components/layout/MasculinoView.vue'
import AcessoriosView from '@/components/layout/AcessoriosView.vue'
import CalcadosView from '@/components/layout/CalcadosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sacola',
      name: 'sacola',
      component: CartPanel,
    }, 
    {
      path: '/feminino',
      name: 'feminino',
      component: FemininoView,
    },
    {
      path: '/masculino',
      name: 'masculino',
      component: MasculinoView,
    },
    {
      path: '/acessorios',
      name: 'acessorios',
      component: AcessoriosView,
    },
    {
      path: '/calcados',
      name: 'calcados',
      component: CalcadosView,
    },
  ],
})

export default router
