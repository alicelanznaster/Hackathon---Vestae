import produtos from '@/data/product'
import { ref } from 'vue'

const ultimoProdAdd = ref('')
const mostrarAviso = ref(false)
const carrinho = ref([
    {
        id: 1,
        titulo: "Blusa Preta Básica",
        imagem: "/produtos/blusapretafem.png",
        descricao: "Foi uma peça que usei bastante, mas sempre cuidei bem. Continua em ótimo estado.",
        categoria: "Feminino",
        tamanho: "M",
        condicao: "Usado",
        marca: "",
        preco: 39.90
    },
])

function addCarrinho(idItem) {
  const item = produtos.value.find((p) => p.id === idItem)

  if (item) {
    ultimoProdAdd.value = item.titulo

    const itemExistente = carrinho.value.find((produto) => produto.id === idItem)

    if (!itemExistente) {
      carrinho.value.push(item)
    }

    mostrarAviso.value = true

    setTimeout(() => {
      mostrarAviso.value = false
    }, 2000)
  }
}

function removerCarrinho(idItem) {
  const posicao = carrinho.value.findIndex(item => item.id === idItem)

  if (posicao !== -1) {
    carrinho.value.splice(posicao, 1)
  }
}


function totalCarrinho() {
  let total = 0

  for (let i = 0; i < carrinho.value.length; i++) {
    total = total + carrinho.value[i].preco
  }

  return total
}

export { ultimoProdAdd, mostrarAviso, carrinho, addCarrinho, removerCarrinho, totalCarrinho}