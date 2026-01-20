<script setup>
import PostList from 'components/PostList.vue';
import fetchPosts from './composables/fetchPosts';
import Error from './components/Error.vue';
import LoadingScreen from './components/LoadingScreen.vue';

const { loadPosts, posts, error } = fetchPosts()
loadPosts()
</script>

<template>
  <h1>Página Inicial</h1>
  <PostList v-if="posts.length" :posts="posts" />
  <Error v-else-if="error" title="Um erro ocorreu no sistema!" :message="error" />
  <LoadingScreen v-else message="Carregando postagens..." />
</template>

<style scoped>
</style>
