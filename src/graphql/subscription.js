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























export const subscribeTransactions = gql`
subscription MySubscription {
  transactions {
    id
    product {
      name
      price
      category {
        name
      }
    }
    user {
      name
    }
    payment_method {
      name
    }
    created_at
    status
  }
}
`