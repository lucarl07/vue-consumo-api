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
      <h2 class="title">Postagens para você:</h2>
      <div class="search-wrapper">
        <input type="text" id="search-by"
          placeholder="Buscar por título..."
          v-model="filter" />
        <slot name="header"></slot>
      </div>
    </header>
    <hr class="separator" />
    <div class="posts">
      <Post v-for="post in filteredPosts[currentPage]" :key="post.id" 
        :title="post.title" :body="post.body" />
    </div>
    <hr class="separator" />
    <footer>
      <button class="nav-buttons"
        @click="currentPage > 0 && currentPage--"
        :disabled="currentPage <= 0">
        &LeftArrow;
      </button>
      <span>
        Página 
        <strong>{{ currentPage + 1 }} </strong>
        de
        <strong>{{ filteredPosts.length }}</strong>
      </span>
      <button class="nav-buttons"
        @click="currentPage < filteredPosts.length - 1 && currentPage++"
        :disabled="currentPage >= filteredPosts.length - 1">
        &RightArrow;
      </button>
    </footer>
  </section>
</template>

<style lang="css" scoped>
  :deep(button) {
    background: none;
    padding: .5rem;
    border: 2px solid white;
    color: white;
    cursor: pointer;
  }
  :deep(button):enabled:active {
    background-color: white;
    color: var(--dark-gray-1);
  }
  .nav-buttons {
    width: 2rem;
    height: 2rem;
    line-height: 0px;
    border-radius: 2rem;
  }
  .nav-buttons:disabled {
    opacity: 0.5;
  }
  .separator {
    margin-block: 1rem;
    color: white;
  }

  .feed {
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      .search-wrapper {
        display: inherit;
        gap: .5rem;
      }
      input {
        padding: .5rem;
        border: 2px solid var(--dark-gray-1);
        border-radius: .75rem;
      }
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
    }
  } 
</style>