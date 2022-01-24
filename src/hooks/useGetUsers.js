import { useQuery } from "@apollo/client";
import { getUsers } from "../graphql/query";
import moment from "moment";

export default function useSubscribeUsers(sortby) {
  const {
    data: dataUsers,
    loading: loadingUsers,
    error: errorUsers,
    refetch,
  } = useQuery(getUsers, {
    variables: {
      created_at: sortby,
    },
  });

  const convertUsers = dataUsers?.users.map((value) => {
    return {
      id: value.id,
      name: value.name,
      phone_number: value.phone_number,
      email: value.email,
      created_at: value.created_at,
    };
  });

  if (!loadingUsers) {
    let dateObj;
    let momentObj;
    for (let i = 0; i < convertUsers.length; i++) {
      dateObj = new Date(convertUsers[i].created_at);
      momentObj = moment(dateObj);
      convertUsers[i].created_at = momentObj.format("lll");
    }
  }

  return {
    convertUsers,
    loadingUsers,
    errorUsers,
    refetch,
  };
}
