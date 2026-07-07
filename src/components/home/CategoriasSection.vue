<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="categorias">

    <RouterLink to="/calcados" class="categoria calcados">
      CALÇADOS
    </RouterLink>

    <RouterLink to="/masculino" class="categoria masculino">
      MASCULINO
    </RouterLink>

    <RouterLink to="/feminino" class="categoria feminino">
      FEMININO
    </RouterLink>

    <RouterLink to="/acessorios" class="categoria acessorios">
      ACESSÓRIOS
    </RouterLink>

  </section>
</template>

<style scoped>
.categorias {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
}

.categoria {
  width: 140px;
  height: 140px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: black;

  font-size: 22px;
  font-family: 'Cormorant Garamond', serif;

  transition: transform 0.3s ease;
}

.categoria:hover {
  transform: scale(1.05);
}

.calcados { background: #FFD58C; }
.masculino { background: #FFB494; }
.feminino { background: #FF8E8E; }
.acessorios { background: #FF6B88; }
</style>