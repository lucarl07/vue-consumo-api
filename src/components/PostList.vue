<script setup>
import Post from 'components/Post.vue';

const { posts } = defineProps(['posts'])
</script>

<template lang="html">
  <section class="feed">
    <h2>Postagens para você</h2>
    <Post v-for="post in posts" :key="post.id" 
      :title="post.title" :body="post.body" />
  </section>
</template>

<style lang="css" scoped>
  
</style>