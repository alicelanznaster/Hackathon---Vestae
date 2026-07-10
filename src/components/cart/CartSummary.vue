<script setup>
import { computed } from 'vue'
import { carrinho, totalCarrinho } from '@/utils/cartUtils'
import { formataPreco } from '@/utils/currencyUtils'
import { RouterLink } from 'vue-router'

const total = computed(() => {
  return totalCarrinho()
})

const quantidadeItens = computed(() => {
  return carrinho.value.length
})

</script>

<template>
  <div class="card">
    <h3>Total ({{ quantidadeItens }} {{ quantidadeItens === 1 ? 'item' : 'itens' }}): {{ formataPreco(total) }}</h3>

    <button>
      Finalizar Compra
    </button>

    <RouterLink to="/">
      <p class="continuar"> Ver mais produtos</p>
    </RouterLink>
  </div>

</template>

<style scoped>

.card{
    background:#F5ECE0;
    border-radius: 12px;
    padding: 25px;
    width: 100%;   
}

h3{
    font-size: 25px;
    color: black;
    margin-bottom: 35px;
    font-family: "Google Sans Flex", arial;
    text-align: right;
}

button{
    width:100%;
    padding:14px;
    border:none;
    border-radius:999px;
    background:#C00B63;
    color:white;
    font-size:18px;
    cursor:pointer;
    font-family: "Marcellus", serif;
}

button:hover{
    opacity:.9;
}

.continuar{
    margin-top:15px;
    text-align:center;
    color:#555;
    text-decoration:underline;
    cursor:pointer;
    font-family: "Marcellus", serif;
}

.aviso{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:#f8e0ec;
    border:2px solid #C00B63;
    border-radius:18px;
    padding:35px;
    width:500px;
    text-align:center;
    font-size:20px;
    box-shadow:0 4px 12px rgba(0,0,0,.2);
    z-index:999;
}
</style>