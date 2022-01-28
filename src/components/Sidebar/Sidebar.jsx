import React from "react";
import bayareen from "../../assets/icon/bayareen.svg";
import user from "../../assets/icon/user.svg";
import product from "../../assets/icon/product.svg";
import transaction from "../../assets/icon/transaction.svg";
import logout from "../../assets/icon/logout.svg";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Sidebar() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const clickHandler = () => {
    removeCookie("token");
    window.location.replace("https://admin.bayareen.my.id/login");
  };

  return (
    <div className="bg-light-green pt-12 flex flex-col px-5 h-full">
      <Link to="/" className="flex flex-col mb-16">
        <img src={bayareen} alt="logo" />
      </Link>
      <ul className="space-y-7 flex flex-col justify-center">
        <li>
          <Link className="flex gap-2" to={"/"}>
            <img src={product} alt="" />
            <p className="text-white font-semibold">Products</p>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" to={"/users"}>
            <img src={user} alt="" />
            <p className="text-white font-semibold">Users</p>
          </Link>
        </li>
        <li>
          <Link className="flex gap-2" to={"/transactions"}>
            <img src={transaction} alt="" />
            <p className="text-white font-semibold">Transactions</p>
          </Link>
        </li>
        <li>
          <button className="flex gap-2" onClick={clickHandler}>
            <img src={logout} alt="" />
            <p className="text-white font-semibold">Logout</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
