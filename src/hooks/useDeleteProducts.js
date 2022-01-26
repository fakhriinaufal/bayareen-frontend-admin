import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useDeleteProducts() {
  const [cookies, setCookies] = useCookies(["cookies"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteProducts = (product) => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/products`, {
        headers: {
          Authorization: `bearer ${cookies.token}`,
        },
        data: {
          id: product,
        },
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data);
      });
    setError("");
  };
  return { deleteProducts, loading, error };
}
