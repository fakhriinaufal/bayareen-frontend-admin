import { gql } from "@apollo/client";

export const getTransactions = gql`
  query MyQuery {
    transactions(where: { deleted_at: { _is_null: true } }) {
      id
      created_at
      status
      price
      payment_method_id
      product {
        name
        category {
          name
        }
      }
      user {
        name
      }
    }
    payment_methods {
      id
      payment_channel
    }
  }
`;
