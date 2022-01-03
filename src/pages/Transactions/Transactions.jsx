import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import DropdownImg from "../../components/DropdownImg/DropdownImg";
import sortby from "../../assets/icon/sortby.svg";
import filterIcn from "../../assets/icon/filter.svg";
import Table from "../../components/Table/Table";

export default function Transactions(props) {
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
  const tableData = [
    {
      id: 1,
      productName: "Pulsa Telkomsel 10.000",
      price: 12000,
      user: "Lorem Ipsum",
      category: "Pulsa",
      paymentMethod: "SHOPEEPAY",
      createdAt: "09-12-2021",
      status: "SUCCESS",
    },
    {
      id: 2,
      productName: "Pulsa Telkomsel 10.000",
      price: 12000,
      user: "Lorem Ipsum",
      category: "Pulsa",
      paymentMethod: "SHOPEEPAY",
      createdAt: "09-12-2021",
      status: "SUCCESS",
    },
    {
      id: 3,
      productName: "Pulsa Telkomsel 10.000",
      price: 12000,
      user: "Lorem Ipsum",
      category: "Pulsa",
      paymentMethod: "SHOPEEPAY",
      createdAt: "09-12-2021",
      status: "SUCCESS",
    },
  ];

  return (
    <Layout sidebar={<Sidebar />}>
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
        <Table header={tableHeader} data={tableData} action={false} />
      </div>
    </Layout>
  );
}
