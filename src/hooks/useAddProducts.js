import axios from "axios";
import { useState } from "react";

export default function useAddProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addProducts = (product) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/products", product)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { addProducts, loading, error };
}
