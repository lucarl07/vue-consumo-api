<script setup>
import { ref } from 'vue';
import PostList from 'components/PostList.vue';

const posts = ref([
  {
    id: 1,
    title: "Olá mundo!",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus iste qui ducimus velit tempore eius obcaecati, repellat quo distinctio aliquid harum veritatis numquam ipsa incidunt tenetur voluptatum officia magnam."
  },
  {
    id: 2,
    title: "Hello world!",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    title: "The quick fox jumped over the lazy dog",
    body: "\"To be or not to be, that is the question\" is the famous opening line from William Shakespeare's play Hamlet, introducing Prince Hamlet's deep contemplation on whether to live or to die, weighing the suffering of life against the terrifying uncertainty of what comes after death."
  }
])
</script>

<template>
  <h1>Página Inicial</h1>
  <PostList :posts="posts" />
</template>

<style scoped>
</style>
