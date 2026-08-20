<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductCard from '@/components/products/ProductCard.vue'


// Dados do usuário logado
const usuario = ref(null)
const fotoPerfil = ref(null)
const inputFile = ref(null)


// Produtos anunciados
const produtos = ref([])


// Pega o usuário logado a partir do que foi salvo no CadastroView.vue
function carregarUsuario() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []


  // ideal: o LoginView.vue salvar o e-mail de quem logou nessa chave
  const emailLogado = localStorage.getItem('vestae-usuario-logado')


  usuario.value =
    usuarios.find((u) => u.email === emailLogado) ||
    usuarios[usuarios.length - 1] ||
    null
}


// Pega os anúncios publicados no AnunciarView.vue
function carregarProdutos() {
  produtos.value = JSON.parse(localStorage.getItem('vestae-anuncios')) || []
  // Observação: o objeto do anúncio ainda não guarda o e-mail de quem publicou.
  // Se quiserem filtrar só os produtos do usuário logado, basta:
  // 1) no AnunciarView.vue, adicionar `email: usuarioLogado` ao criar `novoAnuncio`
  // 2) aqui, trocar por: .filter(p => p.email === usuario.value?.email)
}


// Carrega a foto de perfil salva (se o usuário já tiver enviado uma)
function carregarFoto() {
  if (!usuario.value) return
  const salva = localStorage.getItem(`vestae-foto-${usuario.value.email}`)
  if (salva) fotoPerfil.value = salva
}


// Inicial do nome, usada como avatar enquanto não há foto
const inicial = computed(() => {
  return usuario.value?.nome?.trim().charAt(0).toUpperCase() || '?'
})


const quantidadeProdutos = computed(() => produtos.value.length)


// Abre o seletor de arquivos ao clicar no avatar
function abrirSeletorDeArquivo() {
  inputFile.value.click()
}


// Lê a imagem escolhida e salva no localStorage (mesmo padrão do UploadImg.vue)
function selecionarFoto(evento) {
  const arquivo = evento.target.files?.[0]
  if (!arquivo) return


  const leitor = new FileReader()
  leitor.onload = () => {
    fotoPerfil.value = String(leitor.result)
    localStorage.setItem(`vestae-foto-${usuario.value.email}`, fotoPerfil.value)
  }
  leitor.readAsDataURL(arquivo)
}


onMounted(() => {
  carregarUsuario()
  carregarProdutos()
  carregarFoto()
})
</script>

<template>
  <main class="perfil">
    <section class="cabecalho">
      <button class="avatar" type="button" @click="abrirSeletorDeArquivo">
        <img v-if="fotoPerfil" :src="fotoPerfil" alt="Foto de perfil" class="foto" />
        <span v-else class="inicial">{{ inicial }}</span>
      </button>

      <input type="file" ref="inputFile" @change="selecionarFoto" accept="image/png, image/jpeg, image/webp"
        class="input-oculto" />

      <div class="info">
        <h1>{{ usuario?.nome || 'Meu Perfil' }}</h1>
        <p class="quantidade">{{ quantidadeProdutos }} peças anunciadas</p>
      </div>
    </section>

    <hr class="divisoria" />

    <section class="impacto">
      <h2>
        <img src="/icons/reciclagem.svg" alt="" class="icone-reciclagem" />
        Seu Impacto
      </h2>

      <p class="destaque">
        <span class="numero">{{ quantidadeProdutos }} peças</span>
        anunciadas no VESTÆ
      </p>

      <p class="texto">
        Você está contribuindo para que roupas continuem circulando em vez de
        serem descartadas.
      </p>
    </section>


    <section class="produtos">
      <h2>Meus Produtos</h2>


      <p v-if="produtos.length === 0" class="vazio">
        Você ainda não anunciou nenhuma peça.
      </p>


      <div v-else class="grid">
        <ProductCard v-for="produto in produtos" :key="produto.id" :produto="produto" :mostrar-favorito="false" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.perfil {
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 35px 50px 45px;
  box-sizing: border-box;
  background-color: #fcf5eb;
  color: black;
}

/* =========================
   CABEÇALHO DO PERFIL
========================= */

.cabecalho {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0 15px 52px;
}

.avatar {
  width: 180px;
  height: 180px;
  min-width: 140px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #78033285;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar:hover {
  opacity: 0.9;
}

.foto {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.inicial {
  color: #fcf5eb;
  font-family: "Marcellus", sans-serif;
  font-size: 4.5rem;
}

.info h1 {
  margin: 0 0 7px;
  font-family: "Marcellus", sans-serif;
  font-size: 3rem;
  font-weight: 400;
}

.quantidade {
  margin: 0;
  font-family: "Google Sans Flex", sans-serif;
  font-size: 1.4rem;
  color: #555;
}

.input-oculto {
  display: none;
}

.divisoria {
  border: none;
  border-top: 2px solid #f1e4d3;
  margin: 0 0 50px;
}

.impacto {
  width: 100%;
  max-width: 640px;
  margin: 0 auto 58px;
  padding: 24px 22px;
  box-sizing: border-box;
  border: 1px solid #d3cec8;
  border-radius: 4px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.12);
  background-color: #fcf5eb;
}

.impacto h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 23px;
  font-family: "Marcellus", sans-serif;
  font-size: 2rem;
  font-weight: 400;
}

.icone-reciclagem {
  width: 30px;
  height: 30px;
}

.destaque {
  margin: 0 0 19px;
  font-family: "Google Sans Flex", sans-serif;
  font-size: 1.45rem;
  line-height: 1.4;
}

.numero {
  color: #d41462;
}

.texto {
  margin: 0;
  font-family: "Google Sans Flex", sans-serif;
  font-size: 1.4rem;
  line-height: 1.45;
}

.produtos h2 {
  margin: 0 0 38px 8px;
  font-family: "Marcellus", sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19px;
}

.vazio {
  margin: 0 8px;

  color: rgb(56, 56, 56);
  font-family: "Google Sans Flex", sans-serif;
  text-align: center;
  font-size: 1.25rem;
}

@media (max-width:1024px) {

  .perfil {
    max-width: 650px;
    padding: 32px 45px 40px;
  }

  .cabecalho {
    gap: 28px;
    padding-bottom: 48px;
  }

  .avatar {
    width: 135px;
    height: 135px;
    min-width: 135px;
  }

  .inicial {
    font-size: 4.3rem;
  }

  .info h1 {
    font-size: 2.3rem;
  }

  .quantidade {
    font-size: 1.15rem;
  }

  .impacto {
    max-width: 500px;
  }

  .impacto h2 {
    font-size: 1.9rem;
  }

  .destaque {
    font-size: 1.15rem;
  }

  .texto {
    font-size: 1.05rem;
  }

  .produtos h2 {
    font-size: 2rem;
  }

  .grid {
    gap: 17px;
  }
}

@media (max-width:768px) {

  .perfil {
    max-width: 620px;
    padding: 30px 35px 38px;
  }

  .cabecalho {
    gap: 25px;
    padding: 0 10px 42px;
  }

  .avatar {
    width: 125px;
    height: 125px;
    min-width: 125px;
  }

  .inicial {
    font-size: 4rem;
  }

  .info h1 {
    font-size: 2.1rem;
  }

  .quantidade {
    font-size: 1.1rem;
  }

  .divisoria {
    margin-bottom: 42px;
  }

  .impacto {
    max-width: 100%;
    padding: 22px;
    margin-bottom: 48px;
  }

  .impacto h2 {
    font-size: 1.8rem;
  }

  .destaque {
    font-size: 1.1rem;
  }

  .texto {
    font-size: 1rem;
  }

  .produtos h2 {
    margin-left: 5px;
    margin-bottom: 32px;
    font-size: 1.9rem;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
}

@media (max-width:480px) {

  .perfil {
    max-width: 100%;
    padding: 25px 20px 32px;
  }

  .cabecalho {
    gap: 18px;
    padding: 0 5px 34px;
  }

  .avatar {
    width: 100px;
    height: 100px;
    min-width: 100px;
  }

  .inicial {
    font-size: 3.3rem;
  }

  .info h1 {
    font-size: 1.8rem;
  }

  .quantidade {
    font-size: 1rem;
  }

  .divisoria {
    margin-bottom: 34px;
  }

  .impacto {
    padding: 20px;
    margin-bottom: 40px;
  }

  .impacto h2 {
    font-size: 1.6rem;
    margin-bottom: 19px;
  }

  .icone-reciclagem {
    width: 24px;
    height: 24px;
  }

  .destaque {
    font-size: 1.05rem;
    margin-bottom: 16px;
  }

  .texto {
    font-size: 0.98rem;
  }

  .produtos h2 {
    margin-left: 3px;
    margin-bottom: 26px;
    font-size: 1.7rem;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
}
</style>