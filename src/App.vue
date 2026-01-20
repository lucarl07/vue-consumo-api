<script setup>
import { ref } from 'vue';
import PostList from 'components/PostList.vue';
import fetchPosts from './composables/fetchPosts';

const { loadPosts, posts, error } = fetchPosts()
loadPosts()
</script>

<template>
  <h1>Página Inicial</h1>
  <PostList :posts="posts" />
</template>

<style scoped>
</style>
