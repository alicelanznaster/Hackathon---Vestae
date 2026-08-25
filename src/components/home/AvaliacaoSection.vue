<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const router = useRouter()
const avaliacaoSalva = localStorage.getItem('vestae-avaliacao')
const avaliacaoUsuario = ref(avaliacaoSalva ? JSON.parse(avaliacaoSalva) : null)

const avaliacoes = [
  {
    nome: 'Alana Morais',
    foto: '/avaliacoes/alanamorais.png',
    comentario: '“Me surpreendi com a variedade de estilos e com os preços acessíveis.”',
  },
  {
    nome: 'Gabriella de Souza',
    foto: '/avaliacoes/gabriellasouza.png',
    comentario:
      '“Encontrei peças incríveis por um preço muito melhor do que imaginava. O site é super fácil de usar!”',
  },
  {
    nome: 'Sofia Corrêa',
    foto: '/avaliacoes/sofiacorrea.png',
    comentario: '“A proposta do site é incrível e torna tudo mais prático e sustentável.”',
  },
]

function avaliar() {
  router.push('/avaliacao')
}

function editarAvaliacao() {
  router.push('/avaliacao')
}

function excluirAvaliacao() {
  localStorage.removeItem('vestae-avaliacao')
  avaliacaoUsuario.value = null
}
</script>

<template>
  <section class="avaliacoes">
    <h2>AVALIAÇÕES</h2>

    <!-- desktop -->
    <div class="cards desktop-cards">
      <div class="card" v-for="avaliacao in avaliacoes" :key="avaliacao.nome">
        <div class="perfil">
          <img :src="avaliacao.foto" :alt="avaliacao.nome" />

          <div>
            <h3>{{ avaliacao.nome }}</h3>

            <p class="estrelas">⭐⭐⭐⭐⭐</p>
          </div>
        </div>

        <p class="comentario">
          {{ avaliacao.comentario }}
        </p>
      </div>

      <div v-if="avaliacaoUsuario" class="card">
        <div class="perfil">
          <div class="avatar">
            {{ avaliacaoUsuario.nome.charAt(0).toUpperCase() }}
          </div>

          <div>
            <h3>
              {{ avaliacaoUsuario.nome }}
            </h3>

            <p class="estrelas">
              {{ '⭐'.repeat(avaliacaoUsuario.score) }}
            </p>
          </div>
        </div>

        <p class="comentario">“{{ avaliacaoUsuario.comentario }}”</p>

        <div class="acoes">
          <button @click="editarAvaliacao">Editar</button>

          <button @click="excluirAvaliacao">Excluir</button>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <Swiper
      class="mobile-cards"
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :space-between="20"
      navigation
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="avaliacao in avaliacoes" :key="avaliacao.nome">
        <div class="card">
          <div class="perfil">
            <img :src="avaliacao.foto" :alt="avaliacao.nome" />

            <div>
              <h3>
                {{ avaliacao.nome }}
              </h3>

              <p class="estrelas">⭐⭐⭐⭐⭐</p>
            </div>
          </div>

          <p class="comentario">
            {{ avaliacao.comentario }}
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide v-if="avaliacaoUsuario">
        <div class="card">
          <div class="perfil">
            <div class="avatar">
              {{ avaliacaoUsuario.nome.charAt(0).toUpperCase() }}
            </div>

            <div>
              <h3>
                {{ avaliacaoUsuario.nome }}
              </h3>

              <p class="estrelas">
                {{ '⭐'.repeat(avaliacaoUsuario.score) }}
              </p>
            </div>
          </div>

          <p class="comentario">“{{ avaliacaoUsuario.comentario }}”</p>

          <div class="acoes">
            <button @click="editarAvaliacao">Editar</button>

            <button @click="excluirAvaliacao">Excluir</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div v-if="!avaliacaoUsuario" class="avaliar-container">
      <p>Ainda não avaliou o VESTÆ?</p>

      <button @click="avaliar">AVALIE AGORA</button>
    </div>
  </section>
</template>

<style scoped>
.avaliacoes {
  margin: 80px 0;
}

.avaliacoes h2 {
  text-align: center;
  font-size: 55px;
  font-family: 'Marcellus', serif;
  font-weight: normal;
  margin-bottom: 50px;
  color: black;
  cursor: default;
}

.desktop-cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  flex-wrap: nowrap;
}

.mobile-cards {
  display: none;
}

.card {
  width: 300px;
  min-height: 170px;
  background: #fff;
  border-radius: 20px;
  padding: 20px 25px;
  transition: transform 0.3s ease;
  box-sizing: border-box;
}

.card:hover {
  transform: scale(1.05);
}

.perfil {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.perfil img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.perfil div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.perfil h3 {
  margin: 0;
  font-family: 'Marcellus', serif;
  font-size: 22px;
  font-weight: normal;
  color: #222;
  cursor: default;
}

.estrelas {
  margin: 2px 0 0;
  cursor: default;
}

.comentario {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  color: #222;
  cursor: default;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Marcellus', serif;
  font-size: 22px;
}

.acoes {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.acoes button {
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: underline;
}

.avaliar-container {
  width: 370px;
  margin: 50px auto 70px;
  text-align: center;
}

.avaliar-container p {
  margin: 0 0 15px;
  font-family: 'Marcellus', serif;
  font-size: 28px;
  color: #111;
}

.avaliar-container button {
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #c9005b;
  color: white;
  font-family: 'Marcellus', serif;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.avaliar-container button:hover {
  transform: scale(1.02);
}

@media (max-width: 1024px) {
  .avaliacoes {
    margin: 70px 0;
  }

  .avaliacoes h2 {
    font-size: 45px;
    margin-bottom: 40px;
  }

  .desktop-cards {
    gap: 15px;
    padding: 0 20px;
  }

  .desktop-cards .card {
    width: 100%;
    max-width: 250px;
    padding: 18px 18px;
  }

  .perfil {
    gap: 10px;
  }

  .perfil h3 {
    font-size: 18px;
  }

  .comentario {
    font-size: 17px;
  }
}

@media (max-width: 768px) {
  .desktop-cards {
    display: none;
  }

  .mobile-cards {
    display: block;
    width: calc(100% - 90px);
    margin: 0 auto;
  }

  .mobile-cards .card {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }

  :deep(.swiper-button-prev) {
    left: 20px;
  }

  :deep(.swiper-button-next) {
    right: 20px;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #000;
    --swiper-navigation-size: 20px;
  }

  :deep(.swiper-pagination) {
    position: relative;
    margin-top: 5px;
  }
}

@media (max-width: 500px) {
  .mobile-cards .card {
    width: 100%;
    max-width: 270px;
    margin: 0 auto;
  }

  :deep(.swiper-button-prev) {
    left: 1px;
  }

  :deep(.swiper-button-next) {
    right: 1px;
  }
  .avaliar-container p {
    font-size: 24px;
  }

  .avaliar-container button {
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 400px) {
  .avaliacoes h2 {
    font-size: 30px;
  }

  .mobile-cards {
    padding: 0 35px;
  }

  .mobile-cards .card {
    max-width: 180px;
    padding: 18px;
  }

  .perfil h3 {
    font-size: 18px;
  }

  .comentario {
    font-size: 16px;
  }

  .avaliar-container {
    width: calc(100% - 40px);
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #000;
    --swiper-navigation-size: 15px;
  }

  :deep(.swiper-button-prev) {
    left: 0px;
  }

  :deep(.swiper-button-next) {
    right: 0px;
  }
}
</style>
