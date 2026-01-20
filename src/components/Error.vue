<script setup>
const { title, message } = defineProps(['title', 'message'])
</script>

<template>
  <section class="error">
    <h2 class="title">{{ title }}</h2>
    <p class="message">{{ message }}</p>
  </section>
</template>

<style scoped></style>