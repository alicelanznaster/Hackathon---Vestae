import router from '@/router'
import produtos from '@/data/product'

export function favoritarProduto(produto) {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null')
  if (!usuarioLogado) {
    localStorage.setItem('produtoParaFavoritar', JSON.stringify(produto.id))
    localStorage.setItem('voltarDepoisDoLogin', '/favoritos')
    router.push('/login')
    return
  }

  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '{}')
  if (!favoritos[usuarioLogado.email]) {
    favoritos[usuarioLogado.email] = []
  }

  const posicao = favoritos[usuarioLogado.email].indexOf(produto.id)
  if (posicao === -1) {
    favoritos[usuarioLogado.email].push(produto.id)
    produto.favorito = true
  } else {
    favoritos[usuarioLogado.email].splice(posicao, 1)
    produto.favorito = false
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

export function carregarFavoritos() {
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || 'null')

  for (let i = 0; i < produtos.value.length; i++) {
    produtos.value[i].favorito = false
  }
  if (!usuarioLogado) {
    return
  }

  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '{}')
  const favoritosUsuario = favoritos[usuarioLogado.email] || []

  for (let i = 0; i < produtos.value.length; i++) {
    if (favoritosUsuario.includes(produtos.value[i].id)) {
      produtos.value[i].favorito = true
    }
  }
}