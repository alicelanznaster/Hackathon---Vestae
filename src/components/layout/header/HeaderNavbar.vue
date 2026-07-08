<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="categorias">
        <RouterLink to="/calcados" class="link">
            Calçados
        </RouterLink>
        <RouterLink to="/masculino" class="link">
            Masculino
        </RouterLink>
        <RouterLink to="/feminino" class="link">
            Feminino
        </RouterLink>
        <RouterLink to="/acessorios" class="link">
            Acessórios
        </RouterLink>
    </div>
</template>

<style scoped>
.categorias{
    padding: 15px;
    background-color: #c00b6288;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link{
    padding: 0 8vw;
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
    transition: opacity .2s;
}

.link:hover{
    opacity: .75;
}

.link.router-link-active {
  font-weight: 500;
}
</style>