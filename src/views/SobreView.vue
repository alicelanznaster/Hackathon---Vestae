<script setup>
</script>

<template>
  <main class="sobre">

    <section class="projeto">
      <h2>Sobre o Projeto</h2>

      <p>
        O VESTÆ é um projeto institucional desenvolvido durante o Hackathon com o objetivo de unir tecnologia,
        moda e sustentabilidade. O site foi criado a partir de problemas recorrentes relacionados ao consumo
        excessivo de roupas e aos impactos ambientais causados pela indústria da moda.
      </p>

      <p>
        Nossa proposta é incentivar o consumo consciente por meio da reutilização de peças,
        dando uma nova vida a roupas e acessórios e promovendo uma forma mais sustentável de consumir moda.
      </p>
    </section>

    <hr>

    <section class="equipe">
      <h2>Sobre Nós</h2>

      <p>
        Somos estudantes do Instituto Federal Catarinense e desenvolvemos o VESTÆ durante o Hackathon
        com o propósito de unir tecnologia, criatividade e sustentabilidade em uma solução que incentive
        o consumo consciente e a reutilização de peças.
      </p>

      <div class="membros">

        <div class="membro">
          <img src="/sobre/alice.jpg" alt="Alice">
          <p>Alice</p>
        </div>

        <div class="membro">
          <img src="/sobre/flavia.jpg" alt="Flavia">
          <p>Flavia</p>
        </div>

        <div class="membro">
          <img src="/sobre/sofia.jpg" alt="Sofia">
          <p>Sofia</p>
        </div>

        <div class="membro">
          <img src="/sobre/otavio.jpg" alt="Otávio">
          <p>Otávio</p>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped>
.sobre{
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
    cursor: default;
}

.projeto,
.equipe{
    text-align: center;
    cursor: default;
}

h2{
    margin-bottom: 30px;
    font-size: 3rem;
    color: black;
    cursor: default;
}

p{
    max-width: 700px;
    margin: 0 auto 25px;
    line-height: 1.7;
    font-size: 22px;
    color: black;
    cursor: default;
}

hr{
    margin: 50px 0;
    border: none;
    border-top: 2px solid #a19a9a;
    cursor: default;
}

.membros{
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-top: 35px;
    cursor: default;
}

.membro{
    text-align: center;
    cursor: default;
}

.membro img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    transition: .3s;
    cursor: default;
}

.membro img:hover{
    transform: scale(1.08);
}

.membro p{
    margin: 0;
    font-size: 25px;
    font-family: "Marcellus", serif;
    color: black;
    cursor: default;
}
</style>