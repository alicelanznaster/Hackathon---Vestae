<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import StarRating from '@/components/home/StarRating.vue'

const router = useRouter()
const nome = ref('')
const comentario = ref('')
const nota = ref(0)
const erro = ref('')
const avaliacaoSalva = localStorage.getItem('vestae-avaliacao')
const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null')

if (!usuarioLogado) {
  router.push('/login')
}

if (avaliacaoSalva) {
  const avaliacao = JSON.parse(avaliacaoSalva)
  nome.value = avaliacao.nome
  comentario.value = avaliacao.comentario
  nota.value = avaliacao.score
}

const avaliacaoTemporaria = localStorage.getItem('avaliacaoTemporaria')

if (avaliacaoTemporaria) {
  const avaliacao = JSON.parse(avaliacaoTemporaria)
  nome.value = avaliacao.nome
  comentario.value = avaliacao.comentario
  nota.value = avaliacao.score
  localStorage.removeItem('avaliacaoTemporaria')
}

function validar() {
  if (
    nome.value.trim().length < 3 ||
    comentario.value.trim().length < 10 ||
    nota.value < 1 ||
    nota.value > 5
  ) {
    erro.value = 'Preencha os campos e selecione uma nota.'
    return false
  }

  return true
}

function enviarAvaliacao() {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null')

  if (!usuarioLogado) {
    const avaliacao = {
      nome: nome.value,
      comentario: comentario.value,
      score: nota.value,
    }

    localStorage.setItem('avaliacaoTemporaria', JSON.stringify(avaliacao))
    localStorage.setItem('voltarDepoisDoLogin', '/avaliacao')
    router.push('/login')
    return
  }

  if (!validar()) return
  erro.value = ''
  const avaliacao = {
    nome: nome.value.trim(),
    comentario: comentario.value.trim(),
    score: nota.value,
    email: usuarioLogado.email,
  }

  localStorage.setItem('vestae-avaliacao', JSON.stringify(avaliacao))
  alert('Obrigada por avaliar o VESTÆ! Sua opinião é muito importante para nós.')
  router.push('/')
}
</script>

<template>
  <main class="avaliacao">
    <h1>AVALIE O VESTÆ</h1>

    <form class="formulario-avaliacao" @submit.prevent="enviarAvaliacao">
      <label for="nome">Seu Nome</label>

      <input id="nome" v-model.trim="nome" type="text" placeholder="Informe o seu nome*" />

      <label for="comentario">Comentário</label>

      <textarea
        id="comentario"
        v-model.trim="comentario"
        rows="4"
        placeholder="Mín. 10 caracteres*"
      ></textarea>

      <fieldset class="campo-nota">
        <legend>Sua Nota</legend>

        <StarRating v-model="nota" />
      </fieldset>

      <div v-if="erro" class="mensagem-erro">
        {{ erro }}
      </div>

      <button class="botao-publicar" type="submit">PUBLICAR AVALIAÇÃO</button>
    </form>
  </main>
</template>

<style scoped>
.avaliacao {
  width: 100%;
  max-width: 620px;
  min-height: 650px;
  margin: 0 auto;
  padding: 30px 42px 60px;
  background: #fff8ef;
  font-family: 'Marcellus', serif;
}

.avaliacao h1 {
  margin: 0 0 50px;
  font-size: 40px;
  font-weight: normal;
  color: #111;
}

.formulario-avaliacao {
  display: flex;
  flex-direction: column;
}

.formulario-avaliacao label,
.campo-nota legend {
  font-size: 21px;
  margin-bottom: 12px;
  color: #111;
}

.formulario-avaliacao input,
.formulario-avaliacao textarea {
  border: none;
  outline: none;
  background: white;
  border-radius: 15px;
  padding: 14px;
  font-family: Arial, sans-serif;
  font-size: 13px;
  margin-bottom: 38px;
}

.formulario-avaliacao input {
  width: 200px;
  height: 46px;
}

.formulario-avaliacao textarea {
  width: 100%;
  height: 80px;
  resize: vertical;
}

.formulario-avaliacao input::placeholder,
.formulario-avaliacao textarea::placeholder {
  color: #787878;
}

.campo-nota {
  border: none;
  padding: 0;
  margin: 8px 0 42px;
}

.campo-nota legend {
  padding: 0;
}

.formulario-avaliacao .mensagem-erro {
  color: #c9005b;
  font-family: Arial, sans-serif;
  font-size: 13px;
  margin-bottom: 15px;
}

.botao-publicar {
  align-self: center;
  border: none;
  background: #c9005b;
  color: white;
  border-radius: 14px;
  padding: 12px 28px;
  font-family: 'Marcellus', serif;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
}

.botao-publicar:hover {
  transform: scale(1.03);
}

.campo-nota button {
  background: transparent;
  color: #7c7b88;
  padding: 0;
  font-size: 31px;
  border-radius: 0;
}

.campo-nota button:hover {
  transform: none;
}

/*responsivo*/
@media (max-width: 1024px) {
  .avaliacao {
    max-width: 100%;
    min-height: 100vh;
    padding: 30px 35px 50px;
    box-sizing: border-box;
  }

  .avaliacao h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .formulario-avaliacao input {
    width: 220px;
  }

  .formulario-avaliacao textarea {
    width: 100%;
    box-sizing: border-box;
  }
}

@media (max-width: 768px) {
  .avaliacao {
    padding: 25px 22px 40px;
  }

  .avaliacao h1 {
    font-size: 30px;
    margin-bottom: 35px;
  }

  .formulario-avaliacao label,
  .campo-nota legend {
    font-size: 18px;
  }

  .formulario-avaliacao input {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
  }

  .formulario-avaliacao textarea {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
  }

  .formulario-avaliacao input,
  .formulario-avaliacao textarea {
    margin-bottom: 28px;
  }

  .campo-nota {
    margin: 5px 0 32px;
  }

  .campo-nota button {
    font-size: 28px;
  }

  .botao-publicar {
    width: 100%;
    font-size: 17px;
    padding: 12px;
  }
}
</style>
