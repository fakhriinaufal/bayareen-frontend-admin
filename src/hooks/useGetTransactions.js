import { useQuery } from "@apollo/client";
import { getTransactions } from "../graphql/query";
import moment from "moment";

export default function useSubscribeProducts(sortby) {
  const {
    data: dataTransactions,
    loading: loadingTransactions,
    error: errorTransactions,
    refetch,
  } = useQuery(getTransactions, {
    variables: {
      created_at: sortby,
    },
  });

  const convertedPayment = {};
  for (let i = 0; i < dataTransactions?.payment_methods.length; i++) {
    convertedPayment[dataTransactions?.payment_methods[i].id] =
      dataTransactions?.payment_methods[i].payment_channel;
  }

  const convertTransactions = dataTransactions?.transactions.map((value) => {
    return {
      id: value.id,
      productName: value.product.name,
      price: value.price,
      userName: value.user.name,
      category: value.product.category.name,
      paymentMethod:
        value.payment_method_id === 0
          ? "-"
          : convertedPayment[value.payment_method_id],
      createdAt: value.created_at,
      status: value.status,
    };
  });

  if (!loadingTransactions) {
    let dateObj;
    let momentObj;
    for (let i = 0; i < convertTransactions.length; i++) {
      dateObj = new Date(convertTransactions[i].createdAt);
      momentObj = moment(dateObj);
      convertTransactions[i].createdAt = momentObj.format("lll");
    }
  }

  return {
    convertTransactions,
    loadingTransactions,
    errorTransactions,
    refetch,
  };
}
