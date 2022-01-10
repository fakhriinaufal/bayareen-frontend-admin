import { useSubscription } from "@apollo/client";
import { subscribeProducts } from "../graphql/subscription";

export default function useSubscribeProducts() {
  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSubscription(subscribeProducts);

  const convertProducts = dataProducts?.products.map((value) => {
    return {
      id: value.id,
      name: value.name,
      price: value.price,
      status: value.status ? "Available" : "Unavailable",
      provider: value.provider.name,
      category: value.category.name,
      createdAt: value.created_at,
    };
  });

  return {
    convertProducts,
    loadingProducts,
    errorProducts,
  };
}
