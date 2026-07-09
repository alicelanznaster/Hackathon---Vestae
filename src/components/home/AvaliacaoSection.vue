<script setup>
    const avaliacoes = [
  {
    nome: 'Alana Morais',
    foto: '/avaliacoes/alanamorais.png',
    comentario: '“Me surpreendi com a variedade de estilos e com os preços acessíveis.”'
  },
  {
    nome: 'Gabriella de Souza',
    foto: '/avaliacoes/gabriellasouza.png',
    comentario: '“Encontrei peças incríveis por um preço muito melhor do que imaginava. O site é super fácil de usar!”'
  },
  {
    nome: 'Sofia Corrêa',
    foto: '/avaliacoes/sofiacorrea.png',
    comentario: '“A proposta do site é incrível e torna tudo mais prático e sustentável.”'
  }
]
</script>

<template>
  <section class="avaliacoes">

    <h2>AVALIAÇÕES</h2>

    <div class="cards">
      <div
        class="card"
        v-for="avaliacao in avaliacoes"
        :key="avaliacao.nome"
      >
      <div class="perfil">
        <img :src="avaliacao.foto" :alt="avaliacao.nome">

      <div>
        <h3>{{ avaliacao.nome }}</h3>
        <p class="estrelas">⭐⭐⭐⭐⭐</p>
      </div>
      
      </div>
        <p class="comentario">{{ avaliacao.comentario }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.avaliacoes {
  margin: 80px 0;
}

.card:hover {
  transform: scale(1.05);
}

.avaliacoes h2 {
  text-align: center;
  font-size: 55px;
  font-family: "Marcellus", serif;
  font-weight: normal;
  margin-bottom: 50px;
  color: black;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 55px;
  flex-wrap: wrap;
}

.card {
  width: 350px;
  min-height: 170px;
  background: #fff;
  border-radius: 20px;
  padding: 20px 25px;
  transition: transform 0.3s ease;
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
  font-family: "Marcellus", serif;
  font-size: 22px;
  font-weight: normal;
  color: #222;
}

.estrelas {
  margin: 2px 0 0 0;
}

.estrelas img {
  width: 85px;
  display: block;
}

.comentario {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  color: #222;
}
</style>