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
    width: 100%;
    background: #FEF6EC;
    border-radius: 8px;
    padding: 18px;
    border: 2px solid #7c7c7c75;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    transition: .3s;
    cursor: pointer;
    box-sizing: border-box;
}

.card:hover {
    transform: translateY(-5px);
}

.imagem {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 8px;
}

.informacoes {
    margin-top: 10px;
}

h3 {
    font-size: 1.8rem;
    font-weight: 400;
    color: #444;
}

.preco {
    font-size: 2rem;
    font-weight: 500;
    color: #000;
}

/* ---------- Tablet ---------- */
@media (max-width:1024px) {

    .card {
        padding: 16px;
    }

    h3 {
        font-size: 1.45rem;
    }

    .preco {
        font-size: 1.7rem;
    }

}

/* ---------- Celular ---------- */
@media (max-width:768px) {

    .card {
        padding: 10px;
    }

    .informacoes {
        margin-top: 8px;
    }

    h3 {
        font-size: 1rem;
    }

    .preco {
        font-size: 1.2rem;
    }

}
</style>
