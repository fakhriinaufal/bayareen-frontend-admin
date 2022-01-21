import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Transactions from "./pages/Transactions/Transactions";
import Users from "./pages/Users/Users";
import AddProduct from "./pages/AddProduct/AddProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Login from "./pages/Login/Login";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

function App() {
  const [cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cookies.token !== null) {
      const instance = axios.create({
        baseURL: "http://localhost:8080/admins/auth",
        timeout: 1000,
        headers: { Authorization: `bearer ${cookies.token}` },
      });
      instance
        .get()
        .then(() => {
          dispatch(login());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err, "err");
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <ReactLoading
        type={"spokes"}
        color={"#83C5BE"}
        height={175}
        width={175}
        className="mx-auto mt-32"
      />
    );
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
      </Routes>
    </>
  );
}

export default App;
