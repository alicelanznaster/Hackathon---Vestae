<script setup>
import { ref } from 'vue'
import produtos from '@/data/product'
import UploadImg from '@/components/formulario/UploadImg.vue'
import DadosForm from '@/components/formulario/DadosForm.vue'

const imagem = ref(null)

const salvarImagem = (dados) => {
  imagem.value = dados
}

const publicar = (produto) => {
  if (!imagem.value) {
    alert('Por favor, selecione uma imagem.')
    return
  }

  produtos.value.push({
    id: Date.now(),
    ...produto,
    imagem: imagem.value.preview
  })

  alert('Anúncio publicado! Agradecemos a preferência!')
}
</script>

<template>
  <main class="anunciar">
    <h2>ANUNCIAR</h2>
    <UploadImg @imagemSelecionada="salvarImagem" />
    <DadosForm @enviar="publicar" />
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
