import { createRouter, createWebHistory } from 'vue-router'
import CartPanel from '@/components/cart/CartPanel.vue'
import PagamentoView from '@/views/PagamentoView.vue'
import CadastroView from '@/views/CadastroView.vue'

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
    {
      path: '/cadastro',
      nome: ' cadastro',
      component: CadastroView, 
    }, 
  ],
})

export default router
