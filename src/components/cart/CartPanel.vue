<script setup>
import { carrinho } from '@/utils/cartUtils.js'
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

const emit = defineEmits(['fechar'])

function fecharSacola() {
  emit('fechar')
}
</script>

<template>
  <div class="fundo" @click="fecharSacola">
    <section class="pagina" @click.stop>
      <div class="topo">
        <button class="fechar" @click="fecharSacola">
          <img src="/icons/fechar.svg" alt="botao-fechar" />
        </button>

        <h1>Sacola ({{ carrinho.length }})</h1>
      </div>

      <div v-if="carrinho.length > 0">
        <CartItem v-for="item in carrinho" :key="item.id" :item="item" />

        <CartSummary @finalizar="fecharSacola" />
      </div>

      <div v-else class="vazio">
        <h2>Sua sacola está vazia.</h2>
        <p>Adicione uma peça para continuar.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fundo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.pagina {
  position: absolute;
  top: 0;
  right: 0;
  width: 420px;
  height: 100%;
  background: #f8efe3;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
}

.topo {
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #ddd;
  padding: 20px 30px;
}

.topo h1 {
  font-size: 2rem;
  color: #222;
  padding: 0;
  margin: 0 0 0 5px;
}

.fechar {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.topo .fechar img {
  height: 29px;
  width: 29px;
}

.vazio {
  margin-top: 100px;
  text-align: center;
}

.vazio h2 {
  color: black;
  margin-bottom: 8px;
}

.vazio p {
  color: #666;
}

@media (max-width: 768px) {
  .pagina {
    width: 90%;
  }

  .topo h1 {
    font-size: 1.6rem;
  }

  .fechar img {
    width: 18px;
    height: 18px;
  }
}
</style>
