import { ApolloClient, InMemoryCache } from "@apollo/client";

// cache policy
const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          dog(_, { args, toReference }) {
            return toReference({
              __typename: 'Dog',
              id: args.id,
            });
          }
        }
      }
    }
  });

export const client = new ApolloClient({
    uri: 'https://71z1g.sse.codesandbox.io',
    cache
});
