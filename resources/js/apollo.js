import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';

// HTTP connection to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql',
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