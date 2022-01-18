import axios from "axios";
import { useState } from "react";

export default function useAddProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addProviders = (prov) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/providers", prov)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return { addProviders, loading, error };
}
