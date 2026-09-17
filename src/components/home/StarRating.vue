<script setup>
const nota = defineModel({
  type: Number,
  default: 0,
})
</script>

<template>
  <div class="estrelas-input">
    <button
      v-for="estrela in 5"
      :key="estrela"
      type="button"
      :class="{ ativa: estrela <= nota }"
      @click="nota = estrela"
    >
      ★
    </button>

    <span>{{ nota }}/5</span>
  </div>
</template>

<style scoped>
.estrelas-input {
  display: flex;
  align-items: center;
  gap: 5px;
}

.estrelas-input button {
  border: none;
  background: none;
  font-size: 32px;
  cursor: pointer;
  color: #ccc;
}

.estrelas-input button.ativa {
  color: #d8a928;
}

.estrelas-input span {
  margin-left: 8px;
  color: black;
}
</style>
