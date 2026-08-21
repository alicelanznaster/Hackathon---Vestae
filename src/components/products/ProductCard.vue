<script setup>
import { formataPreco } from '@/utils/currencyUtils'

defineProps(['produto'])
</script>

<template>
    <div class="card">
        <img :src="produto.imagem" :alt="produto.titulo" class="imagem">

        <div class="informacoes">
            <h3>{{ produto.titulo }}</h3>

            <p class="preco">
                {{ formataPreco(produto.preco) }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 300px;
    background: #FEF6EC;
    border-radius: 16px;
    padding: 18px;
    border: 2px solid #7c7c7c75;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    transition: .3s;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-5px);
}

.imagem {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 10px;
}

.informacoes {
    margin-top: 18px;
}

h3 {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: "Google Sans Flex";
    color: #444;
    margin-bottom: 10px;
}

.preco {
    font-size: 2rem;
    font-weight: 600;
    color: #000;
}
</style>
