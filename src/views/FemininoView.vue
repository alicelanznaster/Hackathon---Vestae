<script setup>
import produtos from '@/data/product';
import ProductCard from '@/components/products/ProductCard.vue';
import { computed } from 'vue';

const feminino = computed (() => {
  return produtos.filter(produto => produto.categoria === 'Feminino')
})
</script>

<template>
  <div class="pagina">

    <h1>Feminino</h1>

    <div class="lista-produtos">
      <ProductCard v-for="produto in feminino" :key="produto.id" :produto="produto" />
    </div>
    
  </div>
</template>

<style scoped>
.pagina {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 30px;
}

h1 {
  font-family: "Marcellus", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  color: black;
  margin-bottom: 40px;
}

.lista-produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width:1024px) {

  .pagina {
    padding: 30px 20px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  .lista-produtos {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

}

@media (max-width:768px) {

  .pagina {
    padding: 24px 16px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 24px;
  }

  .lista-produtos {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

}
</style>