<script setup>
import { formataPreco } from '@/utils/currencyUtils'
import { favoritarProduto } from '@/utils/favoritesUtils';

const props = defineProps(['produto'])

function favoritar() {
    favoritarProduto(props.produto)
}
</script>

<template>
    <div class="card">

        <button class="favorito" @click="favoritar">
            <img :src="produto.favorito ? '/icons/coracao-preenchido.svg' : '/icons/coracao.svg'" alt="Favoritar" />
        </button>

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
    position: relative;
}

.card:hover {
    transform: translateY(-5px);
}

.favorito {
    position: absolute;
    top: 5%;
    right: 10%;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
}

.favorito img {
    width: 3rem;
    height: 3rem;
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

    .favorito img {
        width: 2.5rem;
        height: 2.5rem;
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

    .favorito img {
        width: 2rem;
        height: 2rem;
    }

}

@media (max-width: 480px){
    .favorito img {
        width: 1.6rem;
        height: 1.6rem;
    }
}

</style>
