<script setup>
import { ref } from 'vue'

const imagem = ref('')
const nomeImagem = ref('')
const inputFile = ref(null)

const emit = defineEmits(['imagemSelecionada'])

function selecionarArquivo(evento) {
  const arquivo = evento.target.files?.[0]

  if (!arquivo) return

  nomeImagem.value = arquivo.name

  const leitor = new FileReader()

  leitor.onload = () => {
    imagem.value = String(leitor.result)

    emit('imagemSelecionada', {
      arquivo: arquivo,
      preview: imagem.value
    })
  }

  leitor.readAsDataURL(arquivo)
}
function limparImagem() {
  imagem.value = ''
  nomeImagem.value = ''
  inputFile.value.value = ''

  emit('imagemSelecionada', null)
}
</script>

<template>
  <div class="upload">
    <h2>Foto do Produto</h2>

    <div class="input-group">
      <input type="file" @change="selecionarArquivo" ref="inputFile" accept="image/png, image/jpeg, image/webp">

      <div class="area-upload" @click="inputFile.click()"
      >
        <div
          v-if="!imagem" class="placeholder">
          <img src="/form/upload.png" alt="">
          <p>Carregar Fotos (Formato 3:4)</p>
        </div>

        <img v-else :src="imagem" class="preview" alt="Prévia do produto"
        >
      </div>
      <button
              v-if="imagem"
        type="button"
        @click="limparImagem"
      >
        Limpar imagem
      </button>
    </div>
  </div>
</template>


<style scoped>
.upload {
 display: flex;
 flex-direction: column;
 gap: 18px;
 align-items: flex-start;
}

.upload h2 {
 margin: 0;
 font-size: 25px;
 font-weight: 400;
 color: #000000;
}

.input-group {
 width: 100%;
}

input[type='file'] {
 display: none;
}

.area-upload {
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
 transition: 0.2s;
}

.area-upload:hover {
 border-color: #bcbcbc;
 background: #fafafa;
}

.placeholder {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 12px;
}

.placeholder img {
 width: 30px;
}

.placeholder p {
 margin: 0;
 font-size: 15px;
 color: #555;
}

.preview {
 width: 100%;
 height: 100%;
 object-fit: cover;
}

.input-group button{
  color: #FFFFFF;
  background-color: #C00B63;
  border-radius: 15px;
  border: none;
  padding: 5px 25px;
  font-size: 1.15rem;
  font-family: "Marcellus", serif;
  margin-top: 2vh;
}

/*responsividade*/
@media (max-width: 1024px) {
 .area-upload {
   width: 330px;
 }
}

@media (max-width: 768px) {
 .upload {
   width: 100%;
 }

 .upload h2 {
   font-size: 22px;
 }

 .input-group {
   width: 100%;
 }

 .area-upload {
   width: 100%;
   max-width: 360px;
 }
}
</style>
