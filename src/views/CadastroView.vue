<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let nome = ref('')
let email = ref('')
let telefone = ref('')
let senha = ref('')
let confirmarSenha = ref('')
let termos = ref(false)

let mostrarSenha = ref(false)
let mostrarConfirmarSenha = ref(false)
    
function cadastrar() {
    if (
        nome.value === '' ||
        email.value === '' ||
        telefone.value === '' ||
        senha.value === '' ||
        confirmarSenha.value === '' ||
        termos.value === false
    ) {
        alert('Preencha todos os campos!')
        return
    }
  
    if (!email.value.includes('@') || !email.value.includes('.')) {
        alert('Digite um e-mail válido!')
        return
    }

    if (telefone.value.length < 14 || telefone.value.length > 15) {
        alert('Digite um telefone válido!')
        return
    }

    if (senha.value.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres!')
        return
    }

    if (!/[A-Za-z]/.test(senha.value) || !/[0-9]/.test(senha.value)) {
    alert('A senha deve conter pelo menos uma letra e um número!')
    return
    }

    if (senha.value !== confirmarSenha.value) {
        alert('As senhas não são iguais!')
        return
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [] //pega os usuarios já salvos

    let emailExiste = usuarios.some(usuario => usuario.email.toLowerCase() === email.value.toLowerCase()) //evita cadastro de emails iguais

    if (emailExiste) {
        alert('Este e-mail já está cadastrado!')
        return
    }

  // adiciona o novo usuário
    usuarios.push({
        nome: nome.value,
        email: email.value.toLowerCase(),
        telefone: telefone.value,
        senha: senha.value,
        termos: termos.value
    })

  // salva os usuários
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    nome.value = ''
    email.value = ''
    telefone.value = ''
    senha.value = ''
    confirmarSenha.value = ''
    termos.value = false

    alert('Cadastro realizado com sucesso!')
}


function formatarTelefone() {

    telefone.value = telefone.value.replace(/\D/g, '')

    if (telefone.value.length <= 10) {

        telefone.value = telefone.value
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')

    } else {

        telefone.value = telefone.value
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
    }
}

</script>

<template>
    <main class="pagina">

        <RouterLink to="/" class="voltar">
            <img src="/icons/voltar.svg" alt="Voltar">
        </RouterLink>


        <div class="cadastro">
            <h1 class="logo">VESTÆ</h1>

            <section class="card">
                <h2>Comece agora</h2>

                <p class="subtitulo">
                    Crie sua conta e entre no VESTÆ.
                </p>
                
                <form>
                    <input 
                    type="text"
                    v-model="nome"
                    @input="nome = nome.replace(/[^A-Za-zÀ-ÿ\s]/g, '')"
                    placeholder="Nome Completo *"
                    >

                    <input
                    type="email"
                    v-model="email"
                    @input="email = email.replace(/\s/g, '')"
                    placeholder="E-mail *"
                    >

                    <input
                    type="text"
                    v-model="telefone"
                    @input="formatarTelefone"
                    placeholder="Telefone *"
                    maxlength="15"
                    >

                    <div class="senha">
                        <input
                        :type="mostrarSenha ? 'text' : 'password'"
                        v-model="senha"
                        @input="senha = senha.replace(/\s/g, '')"
                        placeholder="Digite sua senha"
                        >

                        <button type="button" @click="mostrarSenha = !mostrarSenha">
                            <img
                            :src="mostrarSenha ? '/icons/fechado.svg' : '/icons/aberto.svg'"
                            alt="Mostrar senha"
                            >
                        </button>
                    </div>
                    
                    <div class="senha">
                        <input
                        :type="mostrarConfirmarSenha ? 'text' : 'password'"
                        v-model="confirmarSenha"
                        @input="confirmarSenha = confirmarSenha.replace(/\s/g, '')"
                        placeholder="Confirme sua senha *"
                        >
                        <button type="button" @click="mostrarConfirmarSenha = !mostrarConfirmarSenha">
                            <img
                            :src="mostrarConfirmarSenha ? '/icons/fechado.svg' : '/icons/aberto.svg'" alt="Mostrar senha">
                        </button>
                    </div>
                    <div class="termos">
                        <input type="checkbox" v-model="termos">

                        <span>
                            Aceito os Termos de Uso e a Política de Privacidade
                        </span>
                    </div>

                </form>
                <button @click="cadastrar()" class="botao">
                    CADASTRAR
                </button>
                <div class="possui">
                    <p>Já possui uma conta?</p>
                    <RouterLink to="/login">Entre agora!</RouterLink>
                </div>
            </section>
      </div>
    </main>
</template>

<style scoped>
.pagina{
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

.cadastro {
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
    padding: 35px 30px;
    border-radius: 18px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3f3f3f;
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

input{
    background-color: #F5ECE0;
    border: none;
    padding: 14px 16px;
    max-width: 500px;
    width: 100%; 
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Google Sans Flex', sans-serif ;
}

input::placeholder {
  color: #3f3f3f;
}

.telefone {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #F5ECE0;
    border-radius: 8px;
}

.ddd {
    padding-left: 16px;
    font-size: 16px;
    color: #3f3f3f;
}

.telefone input {
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding-left: 8px;
}

.telefone input:focus {
    border: none;
    outline: none;
}

.senha {
  display: flex;
  width: 100%;
}

.senha input {
  border-radius: 9px 0 0 9px;
}

.senha button {
  background: #F5ECE0;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  padding-right: 10px;
}

.senha button img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.termos {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.4;
    text-align: left;
}

.termos input {
    width: 17px;
    height: 17px;
    margin: 1px 0 0;
    accent-color: #C00B63;
    cursor: pointer;
    flex-shrink: 0; /*quer dizer q o checkbox não pode encolher*/
}

.botao {
    background-color: #C00B63;
    color: white;
    font-family: 'Marcellus', serif;
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    width: 90%;
    margin-top: 20px;
}

.possui{
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 5px;
    margin-top: 10px;
}

.possui p{
    font-size: 14px;
}

.possui a{
    text-decoration: none;
    color: #C00B63;
    font-weight: 500;
}

@media (max-width: 768px){
    .pagina{
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

  .card {
    width: 100%;
    max-width: 440px;
    padding: 25px 20px;
    border-radius: 15px;
    max-height: none;
  }

  h2 {
    font-size: 24px;
    line-height: 1.2;
  }

  .subtitulo {
    font-size: 16px;
    margin-bottom: 25px;
  }

  form {
    gap: 8px;
  }

  input,
  select {
    font-size: 15px;
    padding: 13px 14px;
  }
}
</style>