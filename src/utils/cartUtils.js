import { produtos } from '@/data/product'
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

function addCarrinho(idItem, quantidade){
    const item = produtos.find((p) => p.id === idItem)

    if (item) {
        ultimoProdAdd.value = item.titulo
        const itemExistente = carrinho.value.find((a) => a.id === idItem)
        if (itemExistente) {
            itemExistente.quantidade += quantidade
            itemExistente.precoTotal = itemExistente.quantidade * item.preco
        } else {
            carrinho.value.push({
                ...item,
                quantidade,
                precoTotal: quantidade * item.preco
            })
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
  return carrinho.value.reduce(
    (total, item) => total + item.precoTotal,
    0
  )
}

export { ultimoProdAdd, mostrarAviso, carrinho, addCarrinho, removerCarrinho, totalCarrinho}