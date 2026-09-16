<script setup>
import { computed } from 'vue'
import { carrinho, selecionados } from '@/utils/cartUtils'
import { formataPreco } from '@/utils/currencyUtils'
import { RouterLink, useRouter} from 'vue-router'

const router = useRouter()
const total = computed(() => {
  let valor = 0

  for (let i = 0; i < carrinho.value.length; i++) {
    if (selecionados.value.includes(carrinho.value[i].id)) {
      valor = valor + carrinho.value[i].preco
    }
  }

  return valor
})

const quantidadeItens = computed(() => {
  return selecionados.value.length
})

function finalizarCompra() {
  if (selecionados.value.length === 0) {
    alert('Selecione pelo menos um produto para continuar.')
    return
  }
  router.push('/pagamento')
}
</script>

<template>
  <div class="card">
    <h3>
      Total ({{ quantidadeItens }} {{ quantidadeItens === 1 ? 'item' : 'itens' }}):
      {{ formataPreco(total) }}
    </h3>

    <div class="btn">
        <button @click="finalizarCompra">FINALIZAR COMPRA</button>
    </div>

    <RouterLink to="/"> <p class="continuar">Ver mais produtos</p> </RouterLink>
  </div>
</template>

<style scoped>
.card {
  padding: 35px;
}

h3 {
  color: #000;
  font-size: 22px;
  margin-bottom: 15px;
  font-family: 'Google Sans Flex', arial;
  text-align: right;
}

.btn {
  text-align: center;
  padding-top: 80px;
}

button {
  width: 90%;
  padding: 12px 14px;
  border: none;
  border-radius: 17px;
  background: #c00b63;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-family: 'Marcellus', serif;
}

button:hover {
  opacity: 0.9;
  transition: 0.2s;
}

.continuar {
  margin-top: 10px;
  text-align: center;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'Marcellus', serif;
}

@media (max-width: 768px) {
  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  button {
    font-size: 16px;
  }

  .continuar {
    font-size: 16px;
  }
}
</style>
