import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function useAddProducts() {
  const [cookies, setCookies] = useCookies(["cookies"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addProviders = (prov) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/providers", prov, {
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
  return { addProviders, loading, error };
}
