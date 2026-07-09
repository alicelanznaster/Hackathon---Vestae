<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="categorias">

    <RouterLink to="/calcados" class="categoria calcados">
      <h2>CALÇADOS</h2>
    </RouterLink>

    <RouterLink to="/masculino" class="categoria masculino">
      <h2>MASCULINO</h2>
    </RouterLink>

    <RouterLink to="/feminino" class="categoria feminino">
      <h2>FEMININO</h2>
    </RouterLink>

    <RouterLink to="/acessorios" class="categoria acessorios">
      <h2>ACESSÓRIOS</h2>
    </RouterLink>

  </section>
</template>

<style scoped>
.categorias {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 90px 0;

}

.categoria {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 17px;
  font-family: 'Cormorant Garamond', serif;
  transition: transform 0.3s ease;
}

.categoria:hover {
  transform: scale(1.05);
}

.calcados { 
  background: #FFD58C; 
  margin: 0 20px;
}

.masculino { 
  background: #FFB494;
  margin: 0 20px;
 
}

.feminino { 
  background: #FF8E8E;
  margin: 0 20px;

}

.acessorios { 
  background: #FF6B88;
  margin: 0 20px;
}
</style>