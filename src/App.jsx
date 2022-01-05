import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Admins from "./pages/Admins/Admins";
import Transactions from "./pages/Transactions/Transactions";
import Users from "./pages/Users/Users";
import AddProduct from "./pages/AddProduct/AddProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product" element={<UpdateProduct />} />
      </Routes>
    </>
  );
}

export default App;
