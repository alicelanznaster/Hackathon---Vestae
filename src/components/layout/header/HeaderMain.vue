<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const busca = ref('')
const router = useRouter()

watch(busca, (valor) => {
    router.push({
        path: '/produtos',
        query: valor ? { busca: valor } : {},
    })
})
</script>

<template>
    <div class="header-main">

        <RouterLink to="/" class="logo">
            <span>VESTÆ</span>
        </RouterLink>

        <div class="pesquisa">
            <input v-model="busca" type="text" placeholder="Pesquisar produtos..." />

            <button type="button">
                <img src="/icons/pesquisar.svg" alt="Pesquisar" class="icone-pesquisa" />
            </button>
        </div>

        <nav class="acoes">

            <RouterLink to="/anunciar" class="link-vender">
                Quero vender
            </RouterLink>

            <RouterLink to="/perfil" class="icones">
                <img src="/icons/perfil.svg" alt="Perfil" class="icone-perfil">
            </RouterLink>

            <RouterLink to="/favoritos" class="icones">
                <img src="/icons/coracao.svg" alt="Favoritos" class="icone-coracao">
            </RouterLink>

            <RouterLink to="/sacola" class="icones">
                <img src="/icons/sacola1.svg" alt="Sacola" class="icone-sacola1">
            </RouterLink>

        </nav>

    </div>
</template>

<style scoped>
.header-main {
    background: #FEF6EC;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
}

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
}

.logo span {
    font-size: 2.8rem;
    font-family: "Tenor Sans", sans-serif;
    color: #000;
    letter-spacing: 1px;
}

.pesquisa {
    flex: 1;
    display: flex;
    align-items: center;
    max-width: 500px;
    margin: 0 50px;
    background: #fff;
    border-radius: 999px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    transition: box-shadow .2s;
}

.pesquisa:focus-within {
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.22);
}

.pesquisa input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 15px 20px;
    font-family: "Google Sans Flex", sans-serif;
    font-size: 1rem;
    color: #000;
}

.pesquisa input::placeholder {
    color: #999;
}

.pesquisa button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icone-pesquisa {
    width: 24px;
    height: 24px;
}

.acoes {
    display: flex;
    align-items: center;
    gap: 16px;
}

.link-vender {
    text-decoration: none;
    font-family: "Google Sans Flex", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
    transition: color .2s;
}

.link-vender:hover {
    color: #C00B63;
}

.icones {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 8px;
    transition: background .2s;
}

.icones:hover {
    background: rgba(192, 11, 99, .08);
}

.icone-perfil,
.icone-coracao{
    width: 28px;
    height: 28px;
    object-fit: contain;
    filter: invert(20%);
}

.icone-sacola1{
    width: 30px;
    height: 30px;
    object-fit: contain;
    filter: invert(20%);
}


.icones:hover .icone-perfil,
.icones:hover .icone-coracao,
.icones:hover .icone-sacola1 {
    filter: invert(11%) sepia(96%) saturate(3500%) hue-rotate(320deg);
}
</style>