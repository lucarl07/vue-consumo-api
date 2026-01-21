import { computed } from 'vue'

export default function filterPosts(data, filter, paginate = false) {
  return computed(() => {
    /* Filtrando as postagens com base no valor do input de busca: */
    const matchingTitlePosts = data.filter(post => 
      post.title
        .toLowerCase()
        .includes(filter.value.toLowerCase())
    )
    
    if (paginate) {
      const p = []
      const pageMaxSize = 10 // Máximo de 10 postagens por página

      /* Dividindo as postagens em páginas: */
      for (let i = 0; i < matchingTitlePosts.length; i += pageMaxSize) {
        p.push(matchingTitlePosts.slice(i, i + pageMaxSize))
      }
      return p;
    }

    return matchingTitlePosts;
  })
}

