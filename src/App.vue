<script setup>
import PostList from 'components/PostList.vue';
import fetchPosts from './composables/fetchPosts';
import Error from './components/Error.vue';
import LoadingScreen from './components/LoadingScreen.vue';

const { loadPosts, posts, error } = fetchPosts()
loadPosts()
</script>

<template>
  <main>
    <h1>Página Inicial</h1>
    <PostList v-if="posts.length" :posts="posts">
      <template v-slot:header>
        <button class="reload-button" @click="loadPosts">
          Recarregar dados
        </button>
      </template>
    </PostList>
    <Error v-else-if="error" title="Um erro ocorreu no sistema!" :message="error" />
    <LoadingScreen v-else message="Carregando postagens..." />
  </main>
</template>

<style> /* Global styles */
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-gray-1);
    color: white;
  }
</style>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: var(--dark-gray-2);
    color: white;
  }

  h1 {
    margin-bottom: 2rem;
  }

  .reload-button {
    border-radius: .75rem;
  }
  .reload-button:hover {
    text-decoration: underline;
  }
</style>
