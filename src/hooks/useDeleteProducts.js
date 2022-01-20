import axios from "axios";
import { useState } from "react";

export default function useDeleteProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const deleteProducts = (product) => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/products`, { data: product })
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { deleteProducts, loading, error };
}
