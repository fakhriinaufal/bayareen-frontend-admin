import axios from "axios";
import { useState } from "react";

export default function useUpdateProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const updateProducts = (product) => {
    setLoading(true);
    axios
      .patch(`http://localhost:8080/products/${product.id}`, product)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { updateProducts, loading, error };
}
