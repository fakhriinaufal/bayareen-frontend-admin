import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Transactions from "./pages/Transactions/Transactions";
import Users from "./pages/Users/Users";
import AddProduct from "./pages/AddProduct/AddProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Login from "./pages/Login/Login";
import useGetProducts from "./hooks/useGetProducts";
import useGetUsers from "./hooks/useGetUsers";
import useGetTransactions from "./hooks/useGetTransactions";
import { useState } from "react";

function App() {
  const [sort, setSort] = useState({
    val: null,
    text: "Sort By",
  });
  const [sort2, setSort2] = useState({
    val: null,
    text: "Sort By",
  });
  const [sort3, setSort3] = useState({
    val: null,
    text: "Sort By",
  });
  const { displayProducts, loadingProducts, errorProducts, refetch } =
    useGetProducts(sort.val);
  const {
    convertUsers,
    loadingUsers,
    errorUsers,
    refetch: refetchUsers,
  } = useGetUsers(sort2.val);
  const {
    convertTransactions,
    loadingTransactions,
    errorTransactions,
    refetch: refetchTransactions,
  } = useGetTransactions(sort3.val);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Products
              sort={sort}
              setSort={setSort}
              displayProducts={displayProducts}
              loadingProducts={loadingProducts}
              errorProducts={errorProducts}
              refetch={refetch}
            />
          }
        />
        <Route
          path="/transactions"
          element={
            <Transactions
              sort={sort2}
              setSort={setSort2}
              convertTransactions={convertTransactions}
              loadingTransactions={loadingTransactions}
              errorTransactions={errorTransactions}
              refetch={refetchTransactions}
            />
          }
        />
        <Route
          path="/users"
          element={
            <Users
              sort={sort3}
              setSort={setSort3}
              convertUsers={convertUsers}
              loadingUsers={loadingUsers}
              errorUsers={errorUsers}
              refetch={refetchUsers}
            />
          }
        />
        <Route path="/add-product" element={<AddProduct refetch={refetch} />} />
        <Route
          path="/update-product/:id"
          element={<UpdateProduct refetch={refetch} />}
        />
      </Routes>
    </>
  );
}

export default App;
