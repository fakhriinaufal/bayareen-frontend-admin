import { gql } from "@apollo/client";

export const subscribeProducts = gql`
  subscription MySubscription {
    products {
      id
      name
      price
      status
      created_at
      category {
        name
      }
      provider {
        name
      }
    }
  }
`;











export const subscribeUsers = gql`
subscription MySubscription {
  users {
    id
    name
    email
    phone_number
    created_at
  }
}
`;