<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="top-bar">
        <p>Dê um novo destino às suas roupas |
            <RouterLink to="/anunciar" class="link-vender">
                Quero vender
            </RouterLink>
        </p>
    </div>
</template>

<style scoped>
.top-bar {
    background-color: #C00B63;
    padding: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top-bar p {
    margin: 0;
    color: white;
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
}

.link-vender {
    color: white;
    font-weight: 700;
    text-decoration: underline;
}

.link-vender:hover {
    opacity: 0.8;
}
</style>