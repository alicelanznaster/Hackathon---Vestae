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
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    navigation
  >
    <SwiperSlide>
      <picture>
        <source media="(max-width: 767px)" srcset="/banner/1.png" />

        <img src="/banner/banner1.png" alt="Banner 1" />
      </picture>
    </SwiperSlide>

    <SwiperSlide>
      <picture>
        <source media="(max-width: 767px)" srcset="/banner/2.png" />

        <img src="/banner/banner2.png" alt="Banner 2" />
      </picture>
    </SwiperSlide>

    <SwiperSlide>
      <picture>
        <source media="(max-width: 767px)" srcset="/banner/3.png" />

        <img src="/banner/banner3.png" alt="Banner 3" />
      </picture>
    </SwiperSlide>

    <SwiperSlide>
      <picture>
        <source media="(max-width: 767px)" srcset="/banner/4.png" />

        <img src="/banner/banner4.png" alt="Banner 4" />
      </picture>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 70px;
  --swiper-navigation-size: 36px;
}

.swiper-slide img {
  width: 100%;
  display: block;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ffffff;
  margin: 30px 0;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ffffff;
}

/*responsivo*/
@media (max-width: 1024px) {
  .swiper {
    padding-top: 60px;
    --swiper-navigation-size: 30px;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    margin: 20px 0;
  }
}

@media (max-width: 767px) {
  .swiper {
    padding-top: 40px;
    --swiper-navigation-size: 22px;
  }

  .swiper-slide picture {
    display: block;
    width: 100%;
  }

  .swiper-slide img {
    width: 100%;
    height: auto;
    display: block;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    margin: 0;
  }
}
</style>
