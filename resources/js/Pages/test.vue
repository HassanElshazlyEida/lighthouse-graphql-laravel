<template>
    <div>
      <h1>te to Inertia.js with Vue 3</h1>
        <div v-if="users && users.data">
            <div v-for="user in users.data" :key="user.name">
            {{ user.name }}
            </div>
        </div>
        <p> latest post</p>
        <p v-if="latestPost"> {{  latestPost.content }} </p>
        <button @click="handleClick"> create User mutation</button>
    </div>
  </template>
  
  <script>
  import gql from 'graphql-tag';
  export default {
    name: 'Welcome',
    apollo: {
    users: {
      query: gql`
        query {
          users {
            data {
              name
            }
          }
        }
      `,
    },
    latestPost : {
        query: gql`
        query {
            latestPost {
                content
            }
        }
        `,
    }
    },
    methods: {
        handleClick() {
            this.$apollo.mutate({
                mutation: gql`
                mutation {
                    createUser(name:"hasona",email:"has2222@gmail.com",password:"password") {
                        id,
                        name,
                        email
                    }
                }   
                `,
            });
        },
    },
  };
  </script>