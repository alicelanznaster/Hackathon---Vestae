<script setup>
import { ref } from 'vue'

const arquivo = ref(null)
const preview = ref(null)
const inputFile = ref(null)

const emit = defineEmits(['imagemSelecionada'])

const selecionarArquivo = (evento) => {
  const file = evento.target.files[0]

  if (file) {
    arquivo.value = file

    const reader = new FileReader()

    reader.onload = (e) => {
      preview.value = e.target.result

      emit('imagemSelecionada', {
        arquivo: file,
        preview: e.target.result
      })
    }

    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <div class="upload-container">

    <h2>Fotos</h2>

    <div class="input-group">

      <input
        type="file"
        @change="selecionarArquivo"
        ref="inputFile"
        accept="image/*"
      >

      <div
        class="area-upload"
        @click="inputFile.click()"
      >

        <div
          v-if="!preview"
          class="placeholder"
        >
          <img src="/form/upload.png" alt="">
          <p>Carregar Fotos (Formato 3:4)</p>
        </div>

        <img
          v-else
          :src="preview"
          class="preview"
          alt="Preview"
        >

      </div>

    </div>

  </div>
</template>

<style scoped>

.upload-container{
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;

}

.upload-container h2{
  margin: 0;
  font-size: 25px;
  font-weight: 400;
  color: #000000;
}

.input-group{
  width: 100%;
}

input[type="file"]{
  display: none;
}

.area-upload{
  width: min(370px, 100%);
  aspect-ratio: 3 / 4;
  margin: 0;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: .2s;
}

.area-upload:hover{
  border-color: #bcbcbc;
  background: #fafafa;
}

.placeholder{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.placeholder img{
  width: 30px;
}

.placeholder p{
  margin: 0;
  font-size: 15px;
  color: #555;
}

.preview{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width:768px){

  .upload-container h2{
    font-size: 1.6rem;
  }

  .area-upload{
    width: 90%;
  }

}

</style>