import { useSubscription } from "@apollo/client";
import { useDispatch } from "react-redux";
import { subscribeProducts } from "../graphql/subscription";
import { setData } from "../store/productSlice";

export default function useSubscribeProducts() {
  const dispatch = useDispatch();
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
      catId: value.category.id,
      provId: value.provider.id,
    };
  });
  dispatch(setData(convertProducts));
  
  const displayProducts = convertProducts?.map((value) => {
    return {
      id: value.id,
      name: value.name,
      price: value.price,
      status: value.status,
      provider: value.provider,
      category: value.category,
      createdAt: value.createdAt,
    };
  });
  return {
    displayProducts,
    loadingProducts,
    errorProducts,
  };
}
