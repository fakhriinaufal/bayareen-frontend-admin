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
  users(where: {deleted_at: {_is_null: true}}) {
    id
    name
    email
    phone_number
    created_at
  }
}
`;
export const subscribeAdmins = gql`
  subscription MySubscription {
    admins(where: { deleted_at: { _is_null: true } }) {
      id
      name
      created_at
    }
  }
`;
