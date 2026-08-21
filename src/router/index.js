import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartPanel from '@/components/cart/CartPanel.vue'
import ProductList from '@/components/products/ProductList.vue'
import FemininoView from '../views/FemininoView.vue'
import MasculinoView from '../views/MasculinoView.vue'
import AcessoriosView from '../views/AcessoriosView.vue'
import CalcadosView from '../views/CalcadosView.vue'
import SobreView from '../views/SobreView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import ProdutoDetail from '../views/ProdutoDetailView.vue'
import AnunciarView from '../views/AnunciarView.vue'
import PerfilView from '../views/PerfilView.vue'
import RatingView from '@/views/RatingView.vue'

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
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: RatingView,
    },
  ],
})

export default router
