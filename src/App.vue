<script setup>
import { RouterView } from 'vue-router'
import AppFooter from '@/components/layout/AppFooter.vue' 
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
  <AppHeader />
  
  <RouterView />

  <AppFooter />
</template>

<style scoped>
</style>
