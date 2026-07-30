<script setup>
import { computed } from 'vue';
import { carrinho, totalCarrinho } from '@/utils/cartUtils'
import { formataPreco } from '@/utils/currencyUtils'
import { RouterLink } from 'vue-router';
const emit = defineEmits(['finalizarCompra'])


const total = computed(() => {
  return totalCarrinho()
})


const quantidadeItens = computed(() => {
  return carrinho.value.length
})

function finalizar() {
  emit('finalizarCompra')
}
</script>


<template>
  <div class="card">
    <h3>Total ({{ quantidadeItens }} {{ quantidadeItens === 1 ? 'item' : 'itens' }}): {{ formataPreco(total) }}</h3>  
   
    <button @click="finalizar"> Finalizar Compra </button>
   
    <RouterLink to="/"> <p class="continuar">Ver mais produtos</p> </RouterLink>
  </div>
 
 
</template>


<style scoped>
.card{
  background:#F8EFE3;
  border-radius:12px;
  padding:25px; width:100%;
}


h3{
  color: #000;
  font-size: 22px;
  margin-bottom:15px;
  font-family: "Google Sans Flex", arial;
  text-align: right;
}


button{
  width:100%;
  padding:14px; border:none;
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




</style>

