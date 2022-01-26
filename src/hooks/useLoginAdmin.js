import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function useLoginAdmin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);

  const loginAdmin = (object) => {
    setLoading(true);
    axios
      .post("http://localhost:8080/admins/login", object)
      .then((res) => {
        setCookie("token", res.data.data.token, { path: "/" });
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data);
      });
    setError("");
  };
  return { loginAdmin, loading, error };
}
