import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useAddProducts() {
  const [cookies, setCookies] = useCookies(["cookies"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addProducts = (product) => {
    setLoading(true);
    axios
      .post("https://api.bayareen.my.id/products", product, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { addProducts, loading, error };
}
