<script setup>
import produtos from '@/data/product'
import ProductCard from './ProductCard.vue'
</script>

<template>
    <div class="product-list">
        <ProductCard v-for="produto in produtos" :key="produto.id" :produto="produto" />
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