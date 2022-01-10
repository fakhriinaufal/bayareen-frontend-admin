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

export const subscribeAdmins = gql`
  subscription MySubscription {
    admins {
      id
      username
      created_at
    }
  }
`;
