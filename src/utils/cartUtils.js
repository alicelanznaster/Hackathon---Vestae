import { produtos } from '@/data/product'
import { ref } from 'vue'

const ultimoProdAdd = ref('')
const mostrarAviso = ref(false)
const carrinho = ref([])

const carrinhoSalvo = JSON.parse(
  localStorage.getItem('carrinho') ?? '[]'
)

carrinho.value = carrinhoSalvo

function addCarrinho(idItem) {
  const item = produtos.value.find((p) => p.id === idItem)

  if (item) {
    ultimoProdAdd.value = item.titulo

    const itemExistente = carrinho.value.find((produto) => produto.id === idItem)

    if (!itemExistente) {
      carrinho.value.push(item)
    }

    localStorage.setItem(
      'carrinho',
      JSON.stringify(carrinho.value)
    )

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

    localStorage.setItem(
      'carrinho',
      JSON.stringify(carrinho.value)
    )
  }
}


function totalCarrinho() {
  let total = 0

  for (let i = 0; i < carrinho.value.length; i++) {
    total = total + carrinho.value[i].preco
  }

  return total
}

function limparCarrinho() {
  carrinho.value = []
  localStorage.setItem( 
    'carrinho', 
    JSON.stringify(carrinho.value) 
  )
}
export { ultimoProdAdd, mostrarAviso, carrinho, addCarrinho, removerCarrinho, totalCarrinho, limparCarrinho}