import React from "react";
import bayareen from "../../assets/icon/bayareen.svg";
import user from "../../assets/icon/user.svg";
import admin from "../../assets/icon/admin.svg";
import product from "../../assets/icon/product.svg";
import transaction from "../../assets/icon/transaction.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-light-green pt-12 flex flex-col px-5 h-full">
      <img className="mb-16" src={bayareen} alt="" />
      <ul className="space-y-7 flex flex-col justify-center">
        <li>
          <Link className="flex gap-2" to={"/product"}>
            <img src={product} alt="" />
            <p className="text-white font-semibold">Products</p>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" to={"/user"}>
            <img src={user} alt="" />
            <p className="text-white font-semibold">Users</p>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" to={"/transaction"}>
            <img src={transaction} alt="" />
            <p className="text-white font-semibold">Transactions</p>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" to={"/admin"}>
            <img src={admin} alt="" />
            <p className="text-white font-semibold">Admins</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
