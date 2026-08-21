<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

let email = ref('')
let senha = ref('')

let mostrarSenha = ref(false)

const router = useRouter()

function entrar() {

    if (email.value === '' || senha.value === '') {
        alert('Preencha todos os campos!')
        return
    }

    // pega os usuários já cadastrados
    const usuarios = JSON.parse(
        localStorage.getItem('usuarios') ?? '[]'
    )

    // procura um usuário com o e-mail e a senha
    const usuario = usuarios.find(
        usuario =>
            usuario.email === email.value.toLowerCase() &&
            usuario.senha === senha.value
    )

    // se não encontrou
    if (!usuario) {
        alert('E-mail ou senha incorretos!')
        return
    }

    // salva o usuário que está logado
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario))

    alert('Login realizado com sucesso!')

    router.push('/')
}
</script>

<template>

    <main class="pagina">

        <RouterLink to="/" class="voltar">
            <img src="/icons/voltar.svg" alt="Voltar">
        </RouterLink>

        <div class="login">

            <h1 class="logo">VESTÆ</h1>

            <section class="card">

                <h2>Bem-vindo de volta!</h2>

                <p class="subtitulo">
                    Entre na sua conta para continuar.
                </p>

                <form @submit.prevent="entrar">

                    <input
                        type="email"
                        v-model="email"
                        @input="email = email.replace(/\s/g, '')"
                        placeholder="E-mail *"
                    >

                    <div class="senha">

                        <input
                            :type="mostrarSenha ? 'text' : 'password'"
                            v-model="senha"
                            @input="senha = senha.replace(/\s/g, '')"
                            placeholder="Senha *"
                        >

                        <button
                            type="button"
                            @click="mostrarSenha = !mostrarSenha"
                        >
                            <img
                                :src="mostrarSenha ? '/icons/fechado.svg' : '/icons/aberto.svg'"
                                alt="Mostrar senha"
                            >
                        </button>

                    </div>

                </form>

                <button
                    @click="entrar"
                    class="botao"
                >
                    ENTRAR
                </button>

                <div class="possui">

                    <p>Não possui uma conta?</p>

                    <RouterLink to="/cadastro">
                        Cadastre-se!
                    </RouterLink>

                </div>

            </section>

        </div>

    </main>

</template>

<style scoped>

.pagina {
    background-color: #EFE4D6;
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

.login {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 100%;
    align-items: center;
}

.logo {
    font-size: 30px;
    margin-bottom: 25px;
    text-align: center;
    color: black;
}

.card {
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

h2 {
    color: #C00B63;
    font-size: 30px;
    margin-bottom: 8px;
}

.subtitulo {
    font-size: 20px;
    line-height: 1.15;
    margin-bottom: 35px;
    color: black;
}

form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-bottom: 15px;
    align-items: center;
}

input {
    background-color: #F5ECE0;
    border: none;
    padding: 14px 16px;
    width: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Google Sans Flex', sans-serif;
}

input::placeholder {
    color: #3f3f3f;
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

.possui {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 5px;
    margin-top: 10px;
}

.possui p {
    font-size: 14px;
}

.possui a {
    text-decoration: none;
    color: #C00B63;
    font-weight: 500;
}

@media (max-width: 768px) {

    .pagina {
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

    input {
        font-size: 15px;
        padding: 13px 14px;
    }
}

</style>