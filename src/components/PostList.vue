<script setup>
import Post from 'components/Post.vue';
import { ref } from 'vue';
import filterPosts from 'composables/filterPosts';

const { posts } = defineProps(['posts'])

const filter = ref('')
const currentPage = ref(0)

const filteredPosts = filterPosts(posts, filter, true)
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
      <Post v-for="post in filteredPosts[currentPage]" :key="post.id" 
        :title="post.title" :body="post.body" />
    </div>
    <hr />
    <footer>
      <button @click="currentPage > 0 && currentPage--"
        :disabled="currentPage <= 0">
        &LeftArrow;
      </button>
      <span>Página {{ currentPage + 1 }} de {{ filteredPosts.length }}</span>
      <button 
        @click="currentPage < filteredPosts.length - 1 && currentPage++"
        :disabled="currentPage >= filteredPosts.length - 1">
        &RightArrow;
      </button>
    </footer>
  </section>
</template>

<style lang="css" scoped>
  
</style>