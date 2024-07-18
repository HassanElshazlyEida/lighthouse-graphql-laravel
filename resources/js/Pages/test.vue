<template>
    <div>
      <h1>te to Inertia.js with Vue 3</h1>
      <div v-for="user in users.data" :key="user.name">
      {{ user.name }}
    </div>
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
  },
  };
  </script>