import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
  uri: "wss://bayareen-graphql.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "c6DPMsCIyHILwxVmqwb350WSFhkneIW2tHbwfG2bvp1N4KuJz3ClzYtGPgmghCLs",
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "https://bayareen-graphql.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "c6DPMsCIyHILwxVmqwb350WSFhkneIW2tHbwfG2bvp1N4KuJz3ClzYtGPgmghCLs",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
