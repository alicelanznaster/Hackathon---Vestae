<script setup>
import { removerCarrinho, selecionados, selecionarProduto } from '@/utils/cartUtils'
import { formataPreco } from '@/utils/currencyUtils'
import { RouterLink } from 'vue-router'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <label class="selecao">
      <input
        type="checkbox"
        :checked="selecionados.includes(item.id)"
        @click="selecionarProduto(item.id)"
      />
      <span></span>
    </label>

    <RouterLink :to="{ name: 'produto', params: { id: item.id } }">
      <img :src="item.imagem" :alt="item.titulo" class="imagem" />
    </RouterLink>

    <div class="info">
      <div class="topo">
        <div>
          <h2>{{ item.titulo }}</h2>
          <p class="descricao">{{ item.descricao }}</p>
        </div>

        <button class="lixeira" @click="removerCarrinho(item.id)">
          <img src="/icons/lixeira.svg" alt="Remover" />
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
  gap: 12px;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  background-color: #efe4d6;
}

.selecao {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 3px;
}

.selecao input {
  display: none;
}

.selecao span {
  width: 18px;
  height: 18px;
  border: 2px solid #c00b63;
  border-radius: 4px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.selecao input:checked + span {
  background-color: #c00b63;
}

.selecao input:checked + span::after {
  content: '✓';
  color: white;
  font-size: 13px;
  font-weight: bold;
}

.imagem {
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 6px;
}
.info {
  flex: 1;
  min-width: 0;
}

.topo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 25px;
}

h2 {
  color: black;
  font-size: 18px;
  margin: 0 0 5px;
}

.descricao {
  color: #555;
  font-size: 13px;
  line-height: 1.2;
  margin: 0;
}

.subtotal {
  position: absolute;
  bottom: 15px;
  right: 20px;
}
.preco {
  margin: 0;
  font-size: 15px;
  color: black;
}

.lixeira {
  position: absolute;
  top: 12px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 3px;
  transition: transform 0.2s ease;
}

.lixeira img {
  width: 20px;
}

.lixeira:hover {
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .card {
    gap: 10px;
    padding: 12px 15px;
  }

  .imagem {
    width: 75px;
    height: 75px;
  }

  h2 {
    font-size: 15px;
  }

  .descricao {
    font-size: 12px;
  }

  .preco {
    font-size: 14px;
  }

  .lixeira {
    top: 8px;
    right: 10px;
  }

  .lixeira img {
    width: 18px;
  }
}

@media (max-width: 400px) {
  .card {
    gap: 10px;
    padding: 15px;
  }

  .imagem {
    width: 100px;
    height: 105px;
  }

  h2 {
    font-size: 16px;
    line-height: 1;
  }

  .descricao {
    font-size: 12px;
  }

  .preco {
    font-size: 14px;
  }

  .lixeira img {
    width: 22px;
  }
}
</style>
