import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',  // Make sure to include /graphql at the end
  cache: new InMemoryCache(),
});

export default client;