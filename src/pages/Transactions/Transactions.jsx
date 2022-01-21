import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import DropdownImg from "../../components/DropdownImg/DropdownImg";
import sortby from "../../assets/icon/sortby.svg";
import filterIcn from "../../assets/icon/filter.svg";
import Table from "../../components/Table/Table";
import Login from "../Login/Login";
import useGetTransactions from "../../hooks/useGetTransactions";
import ReactLoading from "react-loading";

export default function Transactions(props) {
  // const isLogin = false;
  // if (!isLogin) return <Login />;

  const [sort, setSort] = useState({
    val: null,
    text: "Sort By",
  });
  const [filter, setFilter] = useState({
    val: null,
    text: "Filter",
  });
  const mock = [
    {
      text: "Option 1",
      val: 1,
    },
    {
      text: "Option 2",
      val: 2,
    },
  ];

  const tableHeader = [
    "ID",
    "Product Name",
    "Price",
    "User",
    "Category",
    "Payment Method",
    "Created At",
    "Status",
  ];

  const { convertTransactions, loadingTransactions, errorTransactions } =
    useGetTransactions();

  return (
    <Layout sidebar={<Sidebar />}>
      {loadingTransactions ? (
        <ReactLoading
          type={"spokes"}
          color={"#83C5BE"}
          height={175}
          width={175}
          className="mx-auto mt-24"
        />
      ) : (
        <div className="flex-col ml-10 mt-8 mr-10">
          <h2 className="text-3xl font-bold text-dark-gray">Transactions</h2>
          <div className="inline-flex mt-4 mb-8">
            <Search containerClassName={"mr-4"} placeholder={"Search"} />
            <DropdownImg
              icon={sortby}
              name={"sort"}
              list={mock}
              value={sort}
              onChange={setSort}
              containerClassName={"w-40 mr-4"}
            />
            <DropdownImg
              icon={filterIcn}
              name={"sort"}
              list={mock}
              value={filter}
              onChange={setFilter}
              containerClassName={"w-40"}
            />
          </div>
          <Table
            data={convertTransactions}
            header={tableHeader}
            error={errorTransactions}
            action={false}
          />
        </div>
      )}
    </Layout>
  );
}
