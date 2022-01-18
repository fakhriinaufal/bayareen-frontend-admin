import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetCategories() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        console.log(res);
        const convertCategories = res.data.data.map((cat) => {
          return {
            text: cat.name,
            val: cat.id,
          };
        });
        setCategories(convertCategories);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  return { categories, loading, error };
}
