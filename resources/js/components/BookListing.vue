<template>
  <div>
    <Link :href="`/books/${book.id}`">
            
            <img :src="book.image" alt="cover image" class="h-64 mb-2">
        </Link>
        <Link :href="`/books/${book.id}`" class="text-lg font-bold text-black hover:text-grey-darkest mb-1 block">
        {{ book.title }}
      </Link>
    <div class="text-grey-darkest">{{ book.author }}</div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
    components: {
        Link    
    },
  props: ['book']
}
</script>