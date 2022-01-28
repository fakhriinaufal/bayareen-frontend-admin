import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useUpdateProducts() {
  const [cookies, setCookies] = useCookies(["cookies"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateProducts = (product) => {
    setLoading(true);
    axios
      .patch(`https://api.bayareen.my.id/products/${product.id}`, product, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data);
      });
    setError("");
  };
  return { updateProducts, loading, error };
}
