import { useSubscription } from "@apollo/client";
import { subscribeUsers } from "../graphql/subscription";

export default function useSubscribeUsers() {
  const {
    data: dataUsers,
    loading: loadingUsers,
    error: errorUsers,
  } = useSubscription(subscribeUsers);

  const convertUsers = dataUsers?.users.map((value) => {
    return {
      id: value.id,
      name: value.name,
      phone_number: value.phone_number,
      email: value.email,
      created_at: value.created_at,
    };
  });

  return {
    convertUsers,
    loadingUsers,
    errorUsers,
  };
}
