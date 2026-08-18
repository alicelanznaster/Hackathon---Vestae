<script setup>
import { carrinho } from '@/utils/cartUtils'
import CartItem from './CartItem.vue';
import CartSummary from './CartSummary.vue';

</script>

<template>
  <section class="pagina">

    <div class="topo">
        <a href="/" class="fechar">
            <img src="/icons/fechar.svg" alt="botao-fechar">
        </a>
      
        <h1>Sacola ({{ carrinho.length }})</h1>
    </div>

    <div v-if="carrinho.length > 0">

      <CartItem
        v-for="item in carrinho"
        :key="item.id"
        :item="item"
      />

      <CartSummary />

    </div>

    <div v-else class="vazio">
      <h2>Sua sacola está vazia.</h2>
      <p>Adicione uma peça para continuar.</p>
    </div>

  </section>
</template>

<style scoped>
.pagina{
    min-height: 80vh;
    background: #F8EFE3;    
}

.topo{
    display: flex;
    gap: 15px;
    border-bottom: 1px solid #ddd;
    padding: 20px 30px;
}

.topo h1{
    font-size: 2rem;
    color: #222;
    padding: 0;
    margin-left: 5px;
}

.topo a img{
    height: 29px;
    width: 29px;
} 

.fechar{
    display: flex;
    align-items: center;
}

.vazio{
    margin-top: 100px;
    text-align: center;
}

.vazio h2{
    color: black;
    margin-bottom: 8px;
}

.vazio p{
    color:#666;
}

@media (max-width: 768px){
    .topo h1{
        font-size: 1.6rem;
    }

    .fechar img{
        width: 18px;
        height: 18px;
    }
}

</style>