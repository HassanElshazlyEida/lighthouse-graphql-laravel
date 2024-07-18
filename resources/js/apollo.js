import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';


// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri:`${import.meta.env.VITE_APP_URL}/graphql`,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the Apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});