<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { produtos } from '@/data/product'
import { addCarrinho, mostrarAviso } from '@/utils/cartUtils'
import { formataPreco } from '@/utils/currencyUtils'
import { favoritarProduto } from '@/utils/favoritesUtils'

const route = useRoute()
const router = useRouter()

const voltarPagina = () => {
  if (window.history.state && window.history.state.back) {
    router.back()
  } else {
    router.push('/produtos')
  }
}

// procura primeiro nos produtos fixos e depois nos anunciados pelo usuario
const produto = computed(() => {
  const produtoFixo = produtos.value.find((p) => p.id === Number(route.params.id))

  if (produtoFixo) return produtoFixo

  const anuncios = JSON.parse(localStorage.getItem('vestae-anuncios') || '[]')

  return anuncios.find((p) => p.id === Number(route.params.id))
})

// faz o botão de add a sacola aparecer só para produtos que não foram publicados pelo usuário logado
const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null')

const meuProduto = computed(() => {
  if (!usuarioLogado || !produto.value) {
    return false
  }

  return produto.value.email === usuarioLogado.email
})

</script>

<template>
  <div v-if="mostrarAviso" class="aviso">"{{ produto.titulo }}" adicionado(a) à sacola!</div>

  <div v-if="produto" class="pagina">
    <button class="voltar" @click="voltarPagina">
      <img src="/voltar.svg" alt="botão voltar" />
    </button>

    <div class="detalhe">
      <div class="detalhe-img">
        <img :src="produto.imagem" :alt="produto.titulo" class="imagem-produto" />
        <button class="favoritar" @click="favoritarProduto(produto)">
          <img
            :src="produto.favorito ? '/icons/coracao-preenchido.svg' : '/icons/coracao.svg'"
            alt="Favoritar"
          />
        </button>
      </div>

      <div class="dados">
        <h1>{{ produto.titulo }}</h1>

        <p class="preco">
          {{ formataPreco(produto.preco) }}
        </p>

        <button v-if="!meuProduto" class="carrinho" @click="addCarrinho(produto.id)">
          Adicionar à Sacola
        </button>

        <div class="protegido">
          <img src="/icons/protegida.svg" alt="icon-prot" />
          <p>Compra protegida pelo Vestæ</p>
        </div>

        <h3>Descrição:</h3>

        <p class="descricao">
          {{ produto.descricao }}
        </p>

        <div class="informacoes">
          <div class="info">
            <span>{{ produto.tamanho || '-' }}</span>
          </div>

          <div class="info">
            <span>{{ produto.categoria }}</span>
          </div>

          <div class="info">
            <span>{{ produto.status }}</span>
          </div>

          <div class="info">
            <span>{{ produto.condicao }}</span>
          </div>
          <div class="info">
            <span>{{ produto.marca || '-' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else class="nao-encontrado">Produto não encontrado.</p>
</template>

<style scoped>
.aviso {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f8e0ec;
  border: 2px solid #c00b63;
  border-radius: 18px;
  padding: 35px;
  width: 500px;
  text-align: center;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 99999;
  color: black;
}

.pagina {
  background-color: #fef6ec;
  padding: 35px 80px 60px 80px;
  min-height: 85vh;
  box-sizing: border-box;
}

.voltar {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 20px;
  margin-bottom: 20px;
}

.detalhe {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  max-width: 1400px;
}

.detalhe-img {
  position: relative;
  width: 450px;
  height: 600px;
  border-radius: 18px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.28);
  margin-left: 100px;
}

.imagem-produto {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.favoritar {
  position: absolute;
  top: 28px;
  right: 28px;
  background: rgba(255, 255, 255, 0.67);
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.favoritar:hover {
  transform: scale(1.15);
}

.favoritar img {
  width: 28px;
  height: 28px;
}

.dados {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dados h1 {
  font-size: 2.7rem;
  color: black;
  margin-bottom: 15px;
  font-family: 'Marcellus', serif;
}

.preco {
  font-size: 1.65rem;
  color: black;
  margin-top: 10px;
  font-family: 'Marcellus', serif;
  margin: 20px 0 40px 0;
}

.carrinho {
  background-color: #c00b63;
  color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.55rem;
  font-family: 'Marcellus', serif;
  width: 62%;
  margin-bottom: 10px;
  text-align: center;
}

.carrinho:hover {
  background-color: #a00851e0;
}

.protegido {
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  font-size: 0.98rem;
  margin-bottom: 30px;
}

.protegido img {
  width: 15px;
  height: 15px;
}

.dados h3 {
  color: #3f3f3f;
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.descricao {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.65);
  max-width: 570px;
  margin-bottom: 25px;
  line-height: 1.5;
}

.informacoes {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.info {
  background-color: #c00b62ae;
  color: white;
  padding: 6px 20px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  font-family: 'Marcellus', serif;
  text-transform: uppercase;
}

.nao-encontrado {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
}

@media (max-width: 1024px) and (min-width: 769px) {
  .pagina {
    padding: 20px 30px 40px;
    min-height: 85vh;
  }

  .detalhe {
    gap: 30px;
  }

  .detalhe-img {
    width: 340px;
    height: 450px;
    margin-left: 15px;
  }

  .favoritar {
    height: 45px;
    width: 45px;
  }

  .favoritar img {
    width: 27px;
    height: 27px;
  }

  .dados h1 {
    font-size: 1.9rem;
  }

  .preco {
    font-size: 1.35rem;
  }

  .carrinho {
    width: fit-content;
    max-width: 100%;
    padding: 12px 24px;
    font-size: 1.15rem;
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .pagina {
    padding: 10px 20px 40px;
    min-height: 100vh;
  }

  .voltar {
    padding: 10px;
    margin-bottom: 15px;
  }

  .voltar img {
    width: 20px;
    height: 20px;
  }

  .detalhe {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .detalhe-img {
    width: 100%;
    max-width: 340px;
    height: auto;
    aspect-ratio: 1 / 1.3;
    margin: 0;
    border-radius: 16px;
  }

  .favoritar {
    top: 18px;
    right: 18px;
    width: 40px;
    height: 40px;
  }

  .favoritar img {
    width: 24px;
    height: 24px;
  }

  .dados {
    width: 100%;
    align-items: flex-start;
  }

  .dados h1 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  .preco {
    font-size: 1.2rem;
    margin: 5px 0 15px;
  }

  .carrinho {
    width: 100%;
    padding: 14px;
    font-size: 1.1rem;
    text-align: center;
  }

  .protegido {
    font-size: 0.85rem;
    margin-bottom: 20px;
  }

  .dados h3 {
    font-size: 1.2rem;
  }

  .descricao {
    font-size: 0.95rem;
    max-width: 100%;
    margin-bottom: 20px;
    line-height: 1.4;
  }

  .informacoes {
    gap: 6px;
  }

  .info {
    font-size: 0.75rem;
    padding: 5px 10px;
  }

  .aviso {
    width: 80%;
    max-width: 350px;
    padding: 25px 20px;
    font-size: 16px;
    box-sizing: border-box;
  }
}

@media (max-width: 400px) {
  .pagina {
    padding-left: 15px;
    padding-right: 15px;
  }

  .detalhe-img {
    max-width: 300px;
  }

  .dados h1 {
    font-size: 1.35rem;
  }

  .carrinho {
    font-size: 1rem;
  }

  .descricao {
    font-size: 0.9rem;
  }

  .info {
    font-size: 0.7rem;
    padding: 5px 8px;
  }

  .aviso {
    width: 88%;
    font-size: 15px;
  }
}
</style>
