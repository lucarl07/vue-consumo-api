<script setup>
const { message } = defineProps(['message'])
</script>

<template>
  <section class="error">
    <h2 class="message">{{ message }}</h2>
    <p class="await">Por favor aguarde!</p>
  </section>
</template>

<style scoped></style>