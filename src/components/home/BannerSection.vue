<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    navigation
  >
    <SwiperSlide>
      <img src="/banner/banner1.png" alt="Banner 1" />
    </SwiperSlide>

    <SwiperSlide>
      <img src="/banner/banner2.png" alt="Banner 2" />
    </SwiperSlide>

    <SwiperSlide>
      <img src="/banner/banner3.png" alt="Banner 3" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-slide img {
  width: 100%;
  display: block;
  border-radius: 12px;
}

/* Cor das setas */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #000;
}

/* Cor da bolinha ativa */
:deep(.swiper-pagination-bullet-active) {
  background: #000;
}
</style>