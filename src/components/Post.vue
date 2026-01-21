<script setup>
import { computed } from 'vue'
import pfp1 from 'assets/images/pfp_1.png'
import pfp2 from 'assets/images/pfp_2.png'
import pfp3 from 'assets/images/pfp_3.png'

const { title, body, authorId } = defineProps(['title', 'body', 'authorId'])

const authorPfpAlt = computed(() => `Foto de perfil do usuário ${authorId}`)
const authorPfpSrc = computed(() => {
  if (authorId % 2 === 0) return pfp2
  if (authorId % 3 === 0) return pfp3
  return pfp1
})
</script>

<template lang="html">
  <article class="post">
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="body">{{ body }}</p>
    </div>
    <div class="author">
      <span class="name">
        Postado por 
        <strong>Usuário {{ authorId }}</strong>
      </span>
      <img :src="authorPfpSrc" :alt="authorPfpAlt">
    </div>
  </article>
</template>

<style lang="css" scoped>
  .post {
    padding: 1.5rem;
    width: 50rem;
    background-color: azure;
    border-radius: 1.5rem;
    
    .content {
      margin-bottom: .75rem;

      .title {
        font-size: 1.25rem;
        color: black;
      }
      .body {
        color: var(--dark-gray-1);
      }
    }
    .author {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: .5rem;
      text-align: end;

      span {
        color: #777777;
      }
      img {
        width: 2rem;
      }
    }
  }
</style>