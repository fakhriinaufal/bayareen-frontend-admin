import { useSubscription } from "@apollo/client";
import { subscribeAdmins } from "../graphql/subscription";

export default function useSubscribeAdmins() {
  const {
    data: dataAdmins,
    loading: loadingAdmins,
    error: errorAdmins,
  } = useSubscription(subscribeAdmins);
  console.log("test");

  const convertAdmins = dataAdmins?.admins.map((value) => {
    return {
      id: value.id,
      username: value.name,
      createdAt: value.created_at,
    };
  });
  console.log(convertAdmins);
  return {
    convertAdmins,
    loadingAdmins,
    errorAdmins,
  };
}
