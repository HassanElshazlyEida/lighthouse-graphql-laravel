
<template>
  <div class="book container">
    <ApolloQuery :query="bookQuery" :variables="{ id:bookId}">
      <template v-slot="{ result: { loading,error,data }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else class="flex mt-16 flex-col lg:flex-row">
          <div>
            <img :src="data.book.image" alt="book cover">
          </div>

          <div class="w-full lg:w-2/3 ml-0 mt-8 lg:mt-0 lg:ml-16">
            <div class="text-4xl font-bold">{{ data.book.title }}</div>
            <div class="text-2xl text-grey-darkest mb-8">{{ data.book.author }}</div>
            <div class="text-lg text-grey-darkest leading-normal">{{ data.book.description }}</div>
            <div class="my-12">
              <a :href="data.book.link" target="_blank" class="border border-purple-dark border-solid rounded text-purple-dark px-4 py-4 hover:bg-purple hover:text-white">View Link</a>
            </div>
            &middot;
            <a href="#" class="" @click.prevent="deleteBook">Delete</a>
      
          </div>
          <div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import deleteBook from './graphql/mutations/DeleteBook.gql'
import bookQuery from './graphql/queries/Book.gql'
import { router } from  '@inertiajs/inertia-vue3'

export default {
  data(){
    return {
      bookQuery,
    }
  },
  props:{
    bookId: Number
  },
  methods: {
    deleteBook() {
      this.$apollo.mutate({
        mutation: deleteBook,
        variables: {
          id: this.bookId,
        }
      }).then(data => {
        console.log(data)
        this.$inertia.visit("/");
      })
    }
  }

}
</script>

