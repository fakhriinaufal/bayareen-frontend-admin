import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { getProducts } from "../graphql/query";
import { setData } from "../store/productSlice";
import moment from "moment";
import { useEffect } from "react";

export default function useGetProducts(sortby) {
  const dispatch = useDispatch();
  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
    refetch,
  } = useQuery(getProducts, {
    variables: {
      created_at: sortby,
    },
  });

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

  if (!loadingProducts) {
    let dateObj;
    let momentObj;
    for (let i = 0; i < convertProducts.length; i++) {
      dateObj = new Date(convertProducts[i].createdAt);
      momentObj = moment(dateObj);
      convertProducts[i].createdAt = momentObj.format("lll");
    }
  }

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

  useEffect(() => {
    dispatch(setData(convertProducts));
  }, [convertProducts]);

  return {
    displayProducts,
    loadingProducts,
    errorProducts,
    refetch,
  };
}
