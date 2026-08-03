import { createRouter, createWebHistory } from 'vue-router'
import CartPanel from '@/components/cart/CartPanel.vue'
import PagamentoView from '@/views/PagamentoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sacola',
      name: 'sacola',
      component: CartPanel,
    },
    {
      path: '/pagamento',
      name: 'pagamento',
      component: PagamentoView,
    },
  ],
})

export default router
