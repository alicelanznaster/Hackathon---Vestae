<script setup>
import { totalCarrinho } from '@/utils/cartUtils';
import { formataPreco } from '@/utils/currencyUtils';
import { bairros } from '@/data/bairros';
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const cep = ref('')
const rua = ref('')
const numero = ref('')
const bairro = ref('')
const metodoPagamento = ref('')

const bairrosFiltrados = computed(() => {
    let retorno = bairros

    if (bairro.value) {
        retorno = retorno.filter((b) =>
        b.toLowerCase().startsWith(bairro.value.toLowerCase())
        )
    }
    return retorno
})

function selecionarBairro(item) {
  bairro.value = item
}

function confirmarPagamento() {
    if (!bairros.includes(bairro.value)) {
        alert('Selecione um bairro válido!')
    return
    }

    if (!cep.value ||
        !rua.value ||
        !numero.value ||
        !bairro.value ||
        !metodoPagamento.value) {
            alert('Preencha todos os campos obrigatórios')
        return
    }

  alert('Agradecemos por escolher o Vestæ! Esta funcionalidade será implementada em breve!')
}

/*  API CEP */
async function buscarCep() {
  if (cep.value.length !== 8) {
    return
  }

  const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
  const dados = await resposta.json()

  if (dados.erro) {
    alert('CEP não encontrado!')
    return
  }

  rua.value = dados.logradouro
  bairro.value = dados.bairro
}
</script>

<template>
    <main class="topo">
        <RouterLink to="/sacola" class="voltar">
            <img src="/public/icons/voltar.svg" alt="Voltar">
        </RouterLink>

        <div class="pagamento">
            <h1 class="logo">VESTÆ</h1>

            <section class="card">
                <h2>Efetue seu Pagamento</h2>

                <p class="subtitulo">
                    Insira suas informações para concluir o pedido com segurança.
                </p>

                <form>
                   <input
                        type="text"
                        placeholder="CEP *"
                        v-model="cep"
                        maxlength="8"
                        @blur="buscarCep" 
                    />

                    <input
                        type="text"
                        placeholder="Rua *"
                        v-model="rua"
                    />

                    <input
                        type="text"
                        placeholder="Número *"
                        v-model="numero"
                    />

                    <input
                        type="text"
                        placeholder="Bairro *"
                        v-model="bairro"
                    />
                
                    <div v-if="bairro && bairrosFiltrados.length" class="lista-bairros">
                        <p v-for="item in bairrosFiltrados"
                        :key="item"
                        @click="selecionarBairro(item)"
                        >
                        {{ item }}
                        </p>
                    </div>

                    <select v-model="metodoPagamento">
                    <option disabled value="">
                        Método de Pagamento *
                    </option>

                    <option>PIX</option>
                    <option>Cartão de Crédito</option>
                    <option>Cartão de Débito</option>
                    </select> 
                </form>
                

                <p class="valor">
                    Valor da Compra:
                    {{ formataPreco(totalCarrinho()) }}
                </p>

                <button @click="confirmarPagamento()" >CONFIRMAR PAGAMENTO</button>
           
                <div class="protegida">
                    <img src="/public/icons/protegida.svg" alt="icon-compra-protegida">
                    <p>Compra protegida pelo Vestæ</p>
                </div>
            </section>
        </div>
        
    </main>
</template>

<style scoped>
.topo{
    background-color: #EFE4D6;
    padding: 20px 40px 55px;
    min-height: 80vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.voltar{
    padding: 20px;
    display: inline-block;
}

.pagamento{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 100%;
    align-items: center;
}

.logo{
    font-size: 30px;
    margin-bottom: 25px;
    text-align: center;
    color: black;
}

.card{
    background-color: #FEF6EC;
    max-width: 440px;
    width: 100%;
    max-height: 110vh;
    height: 100%;
    padding: 35px 30px;
    border-radius: 18px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2{
    color: #C00B63;
    font-size: 30px;
    margin-bottom: 8px;
}

.subtitulo{
    font-size: 20px;
    line-height: 1.15;
    margin-bottom: 35px;
    color: black;
}

form{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-bottom: 15px;
    align-items: center;
}

input, select{
    background-color: #F5ECE0;
    border: none;
    padding: 14px 16px;
    max-width: 500px;
    width: 100%; 
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;

}

input::placeholder {
  color: #3f3f3f;
}

select {
  cursor: pointer;
  color: #3f3f3f;
}

.lista-bairros p{
    padding: 8px 12px;
    margin: 0;
    cursor: pointer;
    font-size: 13px;
    color: #333;
}

.lista-bairros p:hover {
  font-weight: 600;
}

.valor {
  font-size: 15px;
  color: #111;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  font-weight: 600;
}

.card button{
    background-color: #C00B63;
    color: white;
    font-family: 'Marcellus', serif;
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: opacity 0.2s ease;
}

.card button:hover {
  opacity: 0.9;
}

.protegida{
    display: flex;
    align-items: center;
    margin-top: 8px;
    gap: 5px;
}

.protegida p{
    color: black;
    font-size: 12px;
}

.protegida img{
    width: 15px;
    height: 15px;
}
</style>