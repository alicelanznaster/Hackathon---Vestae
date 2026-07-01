import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartPanel from '@/components/cart/CartPanel.vue'
import FemininoView from '@/components/layout/FemininoView.vue'
import MasculinoView from '@/components/layout/MasculinoView.vue'
import AcessoriosView from '@/components/layout/AcessoriosView.vue'
import CalcadosView from '@/components/layout/CalcadosView.vue'
import SobreView from '@/components/layout/SobreView.vue'
import ProductList from '@/components/products/ProductList.vue'
import FavoritosView from '@/components/layout/FavoritosView.vue'
import ProdutoDetail from '@/components/layout/ProdutoDetail.vue'
import AnunciarView from '@/components/layout/AnunciarView.vue'
import PerfilView from '@/components/layout/PerfilView.vue'

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
    {
      path:'/sobre',
      name:'sobre',
      component: SobreView,
    },
    {
      path: '/produtos',
      name: 'products',
      component: ProductList,
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView,
    },
    {
      path: '/produto/:id',
      name: 'produto',
      component: ProdutoDetail,
    },
    {
      path: '/anunciar',
      name: 'anunciar',
      component: AnunciarView,
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView,
    },
  ],
})

export default router
