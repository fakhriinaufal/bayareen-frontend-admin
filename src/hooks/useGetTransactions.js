import { useQuery } from "@apollo/client";
import { getTransactions } from "../graphql/query";

export default function useSubscribeProducts() {
  const {
    data: dataTransactions,
    loading: loadingTransactions,
    error: errorTransactions,
  } = useQuery(getTransactions);

  const convertedPayment = {};
  for (let i = 0; i < dataTransactions?.payment_methods.length; i++) {
    convertedPayment[dataTransactions?.payment_methods[i].id] =
      dataTransactions?.payment_methods[i].payment_channel;
  }
  console.log(convertedPayment, "converpayment");

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

  return {
    convertTransactions,
    loadingTransactions,
    errorTransactions,
  };
}