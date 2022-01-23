import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://bayareen-graphql.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "c6DPMsCIyHILwxVmqwb350WSFhkneIW2tHbwfG2bvp1N4KuJz3ClzYtGPgmghCLs",
  },
  cache: new InMemoryCache(),
});
