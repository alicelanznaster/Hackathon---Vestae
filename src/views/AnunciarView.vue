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
.anunciar{
  max-width: 1200px;
  margin: 35px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.anunciar h2{
  margin: 0;
  font-size: 40px;
  color: #000;
  font-weight: 400;
  font-family: "Marcellus", serif;
}
</style>