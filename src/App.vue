<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from './components/layout/AppHeader.vue'
import CartPanel from '@/components/cart/CartPanel.vue'

const sacolaAberta = ref(false)

function abrirSacola() {
  sacolaAberta.value = true
}

function fecharSacola() {
  sacolaAberta.value = false
}
</script>

<template>
  <AppHeader @abrir-sacola="abrirSacola" />

  <RouterView />

  <AppFooter />

  <CartPanel v-if="sacolaAberta" @fechar="fecharSacola" />
</template>
