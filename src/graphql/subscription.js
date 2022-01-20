import { gql } from "@apollo/client";

export const subscribeProducts = gql`
  subscription MySubscription {
    products(where: { deleted_at: { _is_null: true } }) {
      id
      name
      price
      status
      created_at
      category {
        id
        name
      }
      provider {
        id
        name
      }
    }
  }
`;

export const subscribeUsers = gql`
  subscription MySubscription {
    users(where: { deleted_at: { _is_null: true } }) {
      id
      name
      email
      phone_number
      created_at
    }
  }
`;
