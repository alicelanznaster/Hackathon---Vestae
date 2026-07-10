<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import produtos from '@/data/product'
import ProductCard from '@/components/products/ProductCard.vue'
const produtosDestaque = produtos.filter(produto => produto.destaque)
</script>

<template>
  <section class="destaques">

    <h2>PEÇAS EM DESTAQUE</h2>

    <p class="subtitulo">
      Encontre roupas únicas, estilosas e sustentáveis que estão fazendo sucesso.
    </p>

    <Swiper
  :modules="[Navigation]"
  :slides-per-view="4"
  :space-between="20"
  navigation
  :loop="produtosDestaque.length > 4"
    >
      <SwiperSlide
        v-for="produto in produtosDestaque"
        :key="produto.id"
      >
        <ProductCard :produto="produto" />
      </SwiperSlide>
    </Swiper>

  </section>
</template>

<style scoped>
.destaques {
  margin: 80px 0;
}

.destaques h2 {
  text-align: center;
  font-size: 55px;
  font-weight: normal;
  color: black;
  cursor: default;
}

.subtitulo {
  text-align: center;
  font-size: 20px;
  color: #000000;
  margin: 10px 0 40px;
  cursor: default;
}

.swiper {
  width: 100%;
  padding: 0 45px;
  --swiper-navigation-size: 22px;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
}

:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #000;
  margin: 0 50px;
}
</style>