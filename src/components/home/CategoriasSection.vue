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
 flex-shrink: 0;
}

.categoria:hover {
 transform: scale(1.05);
}

.calcados {
 background: #ffd58c;
}

.masculino {
 background: #ffb494;
}

.feminino {
 background: #ff8e8e;
}

.acessorios {
 background: #ff6b88;
}

/*responsivo*/
@media (max-width: 1024px) {
 .categorias {
   gap: 20px;
   margin: 70px 20px;
 }

 .categoria {
   width: 145px;
   height: 145px;
   font-size: 15px;
 }
}

@media (max-width: 768px) {
 .categorias {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   justify-items: center;
   gap: 25px 20px;
   margin: 60px 30px;
 }

 .categoria {
   width: 140px;
   height: 140px;
   font-size: 15px;
 }
}

@media (max-width: 400px) {
 .categorias {
   gap: 20px 15px;
   margin: 50px 20px;
 }

 .categoria {
   width: 125px;
   height: 125px;
   font-size: 14px;
 }
}
</style>
