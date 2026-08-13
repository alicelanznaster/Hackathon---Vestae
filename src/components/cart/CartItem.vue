<script setup>
import { removerCarrinho } from '@/utils/cartUtils';
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
    <img :src="item.imagem" :alt="item.titulo" class="imagem">

    <div class="info">
      <div class="topo">
        <div>
          <h2>{{ item.titulo }}</h2>
          <p class="descricao">{{ item.descricao }}</p>
        </div>

        <button class="lixeira" @click="removerCarrinho(item.id)">
          <img src="/icons/lixeira.svg" alt="Remover">
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
  position: relative;
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
    justify-content: flex-end;
    margin-right: 20px;
}
.preco {
  margin-top: auto;
  font-size: 18px;
  color: black;
}

.lixeira {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.2s ease;
}

.lixeira img {
  width: 25px;
}

.lixeira:hover {
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .card {
    gap: 12px;
    padding: 15px;
  }

  .imagem {
    width: 100px;
    height: 100px;
  }

  .info {
    min-width: 0;
  }

  .topo {
    padding-right: 25px;
  }

  h2 {
    font-size: 17px;
    margin-bottom: 5px;
  }

  .descricao {
    font-size: 13px;
    line-height: 1.2;
    max-width: none;
  }

  .subtotal {
    margin-right: 0;
  }

  .preco {
    font-size: 15px;
  }

  .lixeira {
    top: 10px;
    right: 10px;
  }

  .lixeira img {
    width: 20px;
  }
}
</style>