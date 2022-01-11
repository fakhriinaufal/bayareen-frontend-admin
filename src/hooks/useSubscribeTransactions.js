import { useSubscription } from "@apollo/client";
import { subscribeTransactions } from "../graphql/subscription";

export default function useSubscribeProducts() {
  const {
    data: dataTransactions,
    loading: loadingTransactions,
    error: errorTransactions,
  } = useSubscription(subscribeTransactions);

  const convertTransactions = dataTransactions?.transactions.map((value) => {
    return {
      id: value.id,
      productName: value.product.name,
      price: value.product.price,
      userName: value.user.name,
      category: value.product.category.name,
      paymentMethods: value.payment_method.name,
      createdAt: value.created_at,
      status: value.status,
    };
  });
  console.log(convertTransactions);

  return {
    convertTransactions,
    loadingTransactions,
    error: errorTransactions,
  };
}
