import { createRouter, createWebHistory } from 'vue-router'
import ProdutoDetail from '@/components/layout/ProdutoDetail.vue'
import CartPanel from '@/components/cart/CartPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/produto/:id',
      name: 'produto',
      component: ProdutoDetail,
    },
    {
      path: '/sacola',
      name: 'sacola',
      component: CartPanel,
    }
  
  ],
})

export default router
