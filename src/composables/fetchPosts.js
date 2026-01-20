import { ref } from 'vue'

export default function fetchPosts() {
  const posts = ref([])
  const error = ref(null)

  const loadPosts = async () => {
    try {
      let data = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!data.ok) {
        throw Error('Erro ao obter os dados da API JSONPlaceholder.')
      }
      posts.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(`[ERROR] => ${error.value}`)
    }
  }

  return { loadPosts, posts, error }
}