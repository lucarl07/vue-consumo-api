<script setup>
import Post from 'components/Post.vue';
import { computed, ref } from 'vue';

const { posts } = defineProps(['posts'])
const filter = ref('')

const filteredPosts = computed(() =>
  posts.filter(post => 
    post.title
      .toLowerCase()
      .includes(filter.value.toLowerCase())
  )
)
</script>

<template lang="html">
  <section class="feed">
    <header>
      <h2 class="title">Postagens para você</h2>
      <input 
        type="text" id="filter-by" v-model="filter"
        placeholder="Buscar por título..." />
    </header>
    <hr />
    <div class="posts">
      <Post v-for="post in filteredPosts" :key="post.id" 
        :title="post.title" :body="post.body" />
    </div>
  </section>
</template>

<style lang="css" scoped>
  
</style>