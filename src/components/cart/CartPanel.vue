<script setup>
import { carrinho } from '@/utils/cartUtils'
import CartItem from './CartItem.vue';
import CartSummary from './CartSummary.vue';
</script>

<template>
  <section class="pagina">

    <div class="topo">
        <a href="/" class="fechar">
            <img src="/public/fechar.svg" alt="fechar-botao">
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
    background:#F8EFE3;    
}

.topo{
    display: flex;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid #ddd;
    padding: 20px 30px;
}

.topo h1{
    font-size:2rem;
    color:#222;
    padding:0;
    margin-left: 5px;
}

.vazio{
    margin-top:100px;
    text-align:center;
}

.vazio h2{
    color:black;
    margin-bottom:10px;
}

.vazio p{
    color:#666;
}
</style>