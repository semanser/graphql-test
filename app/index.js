import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
    opts: {
      mode: 'no-cors',
    },
  }),
});

const query = gql`
  {
    users {
      name
    }
  }
`

apolloClient.query({
  query,
}).then(result => {
  console.log(result)
})
