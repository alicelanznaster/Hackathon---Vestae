<script setup>
import { totalCarrinho, carrinho, limparCarrinho } from '@/utils/cartUtils';
import { formataPreco } from '@/utils/currencyUtils';
import { bairros } from '@/data/bairros';
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const cep = ref('')
const rua = ref('')
const numero = ref('')
const bairro = ref('')
const metodoPagamento = ref('')
const complemento = ref()
const mostrarBairros = ref(false)
const carregando = ref(false)
const compraConcluida = ref(false)
const mostrarCheck = ref(false)

const bairrosFiltrados = computed(() => {
  let retorno = bairros

  if (bairro.value) {
    retorno = retorno.filter((b) => b.toLowerCase().startsWith(bairro.value.toLowerCase()))
  }
  return retorno
})

function selecionarBairro(item) {
  bairro.value = item
  mostrarBairros.value = false
}

/*  API CEP */
async function buscarCep() {
  const cepSemHifen = cep.value.replace('-', '')

  if (cepSemHifen.length !== 8) {
    return
  }

  const resposta = await fetch(`https://viacep.com.br/ws/${cepSemHifen}/json/`)
  const dados = await resposta.json()

  if (dados.erro) {
    alert('CEP não encontrado!')
    return
  }

  rua.value = dados.logradouro
  bairro.value = dados.bairro
  mostrarBairros.value = false
}

function confirmarPagamento() {
    if (
    !cep.value ||
    !rua.value ||
    !numero.value ||
    !bairro.value ||
    !metodoPagamento.value
    ) {
        alert('Preencha todos os campos obrigatórios')
        return
    }

    if (!bairros.includes(bairro.value)) {
        alert('Selecione um bairro válido!')
        return
    }

    carregando.value = true
    cep.value = ''
    rua.value = ''
    numero.value = ''
    bairro.value = ''
    metodoPagamento.value = ''
    complemento.value = ''
    mostrarBairros.value = false    

    setTimeout(() => {
        carregando.value = false
        compraConcluida.value = true
        mostrarCheck.value = true
        limparCarrinho()

        setTimeout(() => {
            mostrarCheck.value = false
        }, 2000)
    }, 3000) 
}
</script>

<template>
    <main class="topo">
        <RouterLink to="/sacola" class="voltar">
            <img src="/icons/voltar.svg" alt="Voltar">
        </RouterLink>

        <div class="pagamento">

            <div v-if="carregando" class="aviso-carregando">
                <div class="bolinha-carregando"></div>
                <p>Processando seu pagamento...</p>
            </div>  
            
            <div v-if="mostrarCheck" class="aviso-carregando">
                <div class="check">✓</div>
                <p>Compra realizada com sucesso!</p>
            </div>

            <h1 class="logo">VESTÆ</h1>

            <h2>Efetue seu Pagamento</h2>

            <p class="subtitulo">
                Insira suas informações para concluir o pedido com segurança.
            </p>

            <div v-if="compraConcluida" class="sucesso">
                <h2>Compra realizada com sucesso!</h2>

                <p>Obrigada por escolher a VESTÆ.</p>
                <p>Seu pedido foi confirmado.</p>

                <RouterLink to="/" class="voltar-inicio">
                    VOLTAR PARA A PÁGINA INICIAL
                </RouterLink>
            </div>

            <div v-else class="conteudo">

                <section class="card-entrega">

                    <h3>Dados de entrega</h3>

                    <form>
                        <input
                            type="text"
                            placeholder="CEP *"
                            v-model="cep"
                            maxlength="9"
                            @input="cep = cep.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2')"
                            @blur="buscarCep"
                        />
                            
                        <input
                            type="text"
                            placeholder="Bairro *"
                            v-model="bairro"
                            @input="mostrarBairros = true"
                        />  
                        
                        <div v-if="bairro && mostrarBairros" class="lista-bairros">
                            <p v-for="item in bairrosFiltrados"
                            :key="item"
                            @click="selecionarBairro(item)"
                            >
                            {{ item }}
                            </p>
                        </div>

                        <input
                            type="text"
                            placeholder="Rua *"
                            v-model="rua"
                        />

                        <input
                            type="text"
                            placeholder="Número *"
                            v-model="numero"
                            maxlength="5"
                            @input="numero = numero.replace(/\D/g, '')"
                        />
                        
                        <input 
                            type="text"
                            placeholder="Complemento "
                            v-model="complemento"
                        />

                        <select v-model="metodoPagamento">
                            <option disabled value="">
                                Método de Pagamento *
                            </option>

                            <option>PIX</option>
                            <option>Cartão de Crédito</option>
                            <option>Cartão de Débito</option>
                        </select> 
                        
                    </form>
                    <button @click="confirmarPagamento()">FINALIZAR COMPRA</button>

                    <div class="protegida">
                        <img src="/icons/protegida.svg" alt="icon-compra-protegida">
                        <p>Compra protegida pelo Vestæ</p>
                    </div>

                </section>


                <section class="card-resumo">

                    <h3>Resumo da compra</h3>

                    <div v-for="item in carrinho" :key="item.id" class="produto-resumo">
                        <img :src="item.imagem" :alt="item.titulo">

                        <div>
                            <p>{{ item.titulo }}</p>
                            <span>{{ formataPreco(item.preco) }}</span>
                        </div>
                    </div>

                    <div class="valores">
                        <p>
                            Subtotal:
                            <span>{{ formataPreco(totalCarrinho()) }}</span>
                        </p>

                        <p class="frete">
                            Frete:
                            <span>Grátis</span>
                        </p>

                        <p class="total">
                            Total:
                            <span>{{ formataPreco(totalCarrinho()) }}</span>
                        </p>
                    </div>
                </section>

            </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.topo {
  background-color: #efe4d6;
  padding: 20px 40px 55px;
  min-height: 80vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.voltar {
  padding: 20px;
  display: inline-block;
}

.pagamento {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  align-items: center;
}

.aviso-carregando {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f8e0ec;
    border: 2px solid #C00B63;
    border-radius: 18px;
    padding: 35px;
    width: 400px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .2);
    z-index: 99999;
    color: black;
}

.bolinha-carregando {
    width: 55px;
    height: 55px;
    border: 5px solid #E7B7C8;
    border-top: 5px solid #C00B63;
    border-radius: 50%;
    margin: 0 auto 15px;
    animation: carregar 1s linear infinite;
}

@keyframes carregar {
    100% {
        transform: rotate(360deg);
    }
}

.check {
    width: 50px;
    height: 50px;
    background-color: #C00B63;
    color: white;
    border-radius: 50%;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: bold;
}

.logo{
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
    color: black;
}

h2 {
  color: #c00b63;
  font-size: 30px;
  margin-bottom: 8px;
}

.subtitulo {
  font-size: 20px;
  line-height: 1.15;
  margin-bottom: 35px;
  color: black;
}

.sucesso {
    background-color: #FEF6EC;
    width: 100%;
    max-width: 600px;
    padding: 50px 40px;
    border-radius: 18px;
    box-sizing: border-box;
    text-align: center;
    color: black;
}

.sucesso h2 {
    margin-bottom: 20px;
}

.sucesso p {
    font-size: 17px;
    margin: 8px 0;
}

.voltar-inicio {
    display: inline-block;
    margin-top: 25px;
    background-color: #C00B63;
    color: white;
    text-decoration: none;
    font-family: 'Marcellus', serif;
    padding: 14px 20px;
    border-radius: 10px;
    font-size: 16px;
}

.conteudo {
    display: flex;
    gap: 25px;
    width: 100%;
    max-width: 1000px;
    justify-content: center;
    align-items: flex-start;
}

.card-entrega,
.card-resumo {
    background-color: #FEF6EC;
    border-radius: 18px;
    padding: 35px;
    box-sizing: border-box;
    text-align: center;
    color: black;
}

.card-entrega {
    width: 55%;
}

.card-resumo {
    width: 45%;
    text-align: left;
}

.card-entrega h3,
.card-resumo h3 {
    color: #C00B63;
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 20px;
    font-family: "Marcellus", serif;
    text-align: left;
}

form{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
}

input, select{
    background-color: #F5ECE0;
    border: none;
    padding: 14px 16px;
    width: 100%; 
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Google Sans Flex', sans-serif ;
}

input::placeholder {
    color: #3f3f3f;
}

select {
    cursor: pointer;
    color: #3f3f3f;
}

.lista-bairros p {
  padding: 8px 12px;
  margin: 0;
  cursor: pointer;
  font-size: 13px;
  color: #333;
}

.lista-bairros p:hover {
    font-weight: 600;
}

.card-entrega button{
    background-color: #C00B63;
    color: white;
    font-family: 'Marcellus', serif;
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    width: 100%;
}

.card-entrega button:hover {
    opacity: 0.9;
}


.protegida{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 5px;
}

.protegida p {
  color: black;
  font-size: 12px;
}

.protegida img {
  width: 15px;
  height: 15px;
}

.produto-resumo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
}

.produto-resumo img {
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 8px;
}

.produto-resumo p {
    margin: 0 0 4px;
    font-size: 14px;
}

.produto-resumo span {
    font-size: 13px;
    font-family: "Google Sans Flex", sans-serif; 
}



.valores {
    border-top: 1px solid #ddd;
    margin-top: 20px;
    padding-top: 12px;

}

.valores p {
    display: flex;
    justify-content: space-between;
    margin: 9px 0;
    font-size: 14px;
}

.valores .total {
    font-size: 19px;
    font-weight: 600;
    margin-top: 15px;
}

.frete span{
    font-size: 12px;
    color: #C00B63;
    font-weight: 600;
    margin-top: 0; 
}


@media (max-width: 768px) {
    .topo {
        padding: 10px 18px 35px;
        min-height: 100vh;
    }

    .voltar {
        padding: 10px;
    }

    .voltar img {
        width: 20px;
        height: 20px;
    }

    .logo {
        font-size: 25px;
        margin-bottom: 18px;
    }

    h2 {
        font-size: 24px;
        line-height: 1.2;
    }

    .subtitulo {
        font-size: 16px;
        margin-bottom: 25px;
    }

    .conteudo-pagamento {
        flex-direction: column;
        gap: 15px;
    }

    .card-entrega,
    .card-resumo {
        width: 100%;
        padding: 25px 20px;
    }

    input,
    select {
        font-size: 15px;
        padding: 13px 14px;
    }

    .card-entrega button {
        width: 100%;
        font-size: 16px;
        padding: 14px;
    }

    .protegida {
        margin-top: 10px;
    }

    .protegida p {
        font-size: 11px;
    }
}
</style>
