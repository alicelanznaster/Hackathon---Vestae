<script setup>
import { removerCarrinho } from '@/utils/cartUtils';
import { RouterLink } from 'vue-router';
import { formataPreco } from '@/utils/currencyUtils';

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <RouterLink :to="{ name: 'produto', params: { id: item.id } }">
      <img :src="item.imagem" :alt="item.titulo" class="imagem">
    </RouterLink>

    <div class="info">
      <div class="topo">
        <div>
          <h2>{{ item.titulo }}</h2>
          <p class="descricao">{{ item.descricao }}</p>
        </div>

        <button class="lixeira" @click="removerCarrinho(item.id)">
          <img src="/public/lixeira.svg" alt="Remover">
        </button>

      </div>
    </div>
    <div class="subtotal">
        <p class="preco">
            {{ formataPreco(item.preco) }}
        </p>
      </div>
  </div>
  
</template>

<style scoped>
.card {
  display: flex;
  gap: 16px;
  padding: 20px 30px;
  border-bottom: 1px solid #ddd;
  background-color: #EFE4D6;
}

.imagem {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.topo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

h2 {
  color: black;
  font-size: 22px;
  margin-bottom: 6px;
}

.descricao {
  color: #555;
  font-size: 15px;
  max-width: 400px;
}

.subtotal{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
}
.preco {
  margin-top: auto;
  font-size: 18px;
  color: black;
}

.lixeira {
  background: none;
  border: none;
  cursor: pointer;
  
}

.lixeira img {
  width: 25px;
}

.lixeira:hover {
  transform: translateY(-1px);
}
</style>