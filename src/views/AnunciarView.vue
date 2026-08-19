<script setup>
import { ref } from 'vue'
import UploadImg from '@/components/formulario/UploadImg.vue'
import DadosForm from '@/components/formulario/DadosForm.vue'

const imagem = ref(null)
const publicado = ref(false)

const salvarImagem = (dados) => {
  imagem.value = dados
}

const publicar = (produto) => {
  publicado.value = false

  if (!imagem.value) {
    alert('Por favor, selecione uma imagem.')
    return
  }

  const anunciosSalvos = JSON.parse(
    localStorage.getItem('vestae-anuncios') ?? '[]'
  )

  const novoAnuncio = {
    id: Date.now(),
    ...produto,
    imagem: imagem.value.preview
  }

  anunciosSalvos.push(novoAnuncio)

  localStorage.setItem(
    'vestae-anuncios',
    JSON.stringify(anunciosSalvos)
  )

  alert('Anúncio publicado! Agradecemos a preferência!')

  publicado.value = true
  imagem.value = null
}
</script>

<template>
  <main class="anunciar">
    <h2>ANUNCIAR</h2>

    <UploadImg @imagemSelecionada="salvarImagem" />

    <DadosForm
      :publicado="publicado"
      @enviar="publicar"
    />
  </main>
</template>

<style scoped>
.anunciar {
 max-width: 1200px;
 margin: 35px auto;
 display: flex;
 flex-direction: column;
 gap: 40px;
}

.anunciar h2 {
 margin: 0;
 font-size: 40px;
 color: #000;
 font-weight: 400;
 font-family: 'Marcellus', serif;
}

/*responsivo*/

@media (max-width: 1024px) {
 .anunciar {
   max-width: 900px;
   gap: 35px;
   padding: 0 25px;
 }

 .anunciar h2 {
   font-size: 36px;
 }
}

@media (max-width: 768px) {
 .anunciar {
   width: 100%;
   padding: 0 18px;
   gap: 28px;
   box-sizing: border-box;
 }

 .anunciar h2 {
   font-size: 30px;
 }
}
</style>