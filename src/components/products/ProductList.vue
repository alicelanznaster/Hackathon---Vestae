<script setup>
import produtos from '@/data/product'
import ProductCard from './ProductCard.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const produtosFiltrados = computed(() => {

    const busca = route.query.busca?.toLowerCase() || ''

    if (!busca) {
        return produtos
    }

    return produtos.filter(produto =>

        produto.titulo.toLowerCase().includes(busca) ||
        produto.categoria.toLowerCase().includes(busca) ||
        produto.condicao.toLowerCase().includes(busca) ||
        produto.tamanho.toLowerCase().includes(busca)

    )

})
</script>


<template>
    <div class="product-list">
        <ProductCard v-for="produto in produtosFiltrados" :key="produto.id" :produto="produto" />
    </div>
</template>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 30px;
}
</style>