import { gql } from "@apollo/client";

export const getTransactions = gql`
  query MyQuery($created_at: order_by = asc) {
    transactions(
      where: { deleted_at: { _is_null: true } }
      order_by: { created_at: $created_at }
    ) {
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

export const getProducts = gql`
  query MyQuery($created_at: order_by = asc) {
    products(
      where: { deleted_at: { _is_null: true } }
      order_by: { created_at: $created_at }
    ) {
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

export const getUsers = gql`
  query MyQuery($created_at: order_by = asc) {
    users(
      where: { deleted_at: { _is_null: true } }
      order_by: { created_at: $created_at }
    ) {
      id
      name
      email
      phone_number
      created_at
    }
  }
`;
