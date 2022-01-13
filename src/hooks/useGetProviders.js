import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetProviders(idx) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [providers, setProviders] = useState([]);

  let url = `http://localhost:8080/providers?catId=${idx}`;

  useEffect(() => {
    if (idx === null) {
      return { providers, loading, error };
    }
    axios
      .get(url)
      .then((res) => {
        const convertProviders = res.data.data.map((prov) => {
          return {
            text: prov.name,
            val: prov.id,
          };
        });
        setProviders(convertProviders);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [idx]);

  return { providers, loading, error };
}
