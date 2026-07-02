import { createRouter, createWebHistory } from 'vue-router'
import ProdutoDetail from '@/components/layout/ProdutoDetail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/produto/:id',
      name: 'produto',
      component: ProdutoDetail,
    },
  
  ],
})

export default router
