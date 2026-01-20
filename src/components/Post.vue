<script setup>
const { title, body } = defineProps(['title', 'body'])
</script>

<template lang="html">
  <article class="post">
    <h3 class="title">{{ title }}</h3>
    <p class="body">{{ body }}</p>
  </article>
</template>

<style lang="css" scoped>
  
</style>