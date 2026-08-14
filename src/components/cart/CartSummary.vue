<script setup>
import { computed } from 'vue';
import { carrinho, totalCarrinho } from '@/utils/cartUtils'
import { formataPreco } from '@/utils/currencyUtils'
import { RouterLink } from 'vue-router';


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
    
    <div class="btn">
      <RouterLink to="/pagamento">
      <button> FINALIZAR COMPRA </button>
    </RouterLink>
    </div>
    
    <RouterLink to="/"> <p class="continuar">Ver mais produtos</p> </RouterLink>
  </div>
 
 
</template>


<style scoped>
.card{
  padding: 35px; 
}


h3{
  color: #000;
  font-size: 22px;
  margin-bottom: 15px;
  font-family: "Google Sans Flex", arial;
  text-align: right;
}

.btn{
  text-align: center;
  padding-top: 80px;
}

button{
  max-width: 90vw;
  width: 100%;
  padding: 12px 14px; 
  border:none;
  border-radius: 17px;
  background:#C00B63;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-family: "Marcellus", serif;
}


button:hover{
  opacity: 0.9;
  transition: 0.2s;
}


.continuar{
  margin-top: 10px;
  text-align: center;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
  font-family: "Marcellus", serif;
}

@media (max-width: 768px){
  h3{
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  button{
    font-size: 16px;
  }

  .continuar{
    font-size: 16px;
  }
}


</style>

