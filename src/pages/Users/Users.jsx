import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import DropdownImg from "../../components/DropdownImg/DropdownImg";
import sortby from "../../assets/icon/sortby.svg";
import Table from "../../components/Table/Table";
import { tableHeaderUsers, tableDataUsers } from "../../components/Table/mock";
import Login from "../Login/Login";

export default function Users(props) {
  const isLogin = false;
  if (!isLogin) return <Login />;

  const [sort, setSort] = useState({
    val: null,
    text: "Latest",
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
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="flex-col ml-10 mt-8 mr-10">
        <div className="text-3xl font-bold text-dark-gray">Users</div>
        <div className="inline-flex mt-4 mb-8">
          <Search containerClassName={"mr-4"} placeholder={"Search"} />
          <DropdownImg
            icon={sortby}
            name={"sort"}
            list={mock}
            value={sort}
            onChange={setSort}
            containerClassName={"w-40"}
          />
        </div>
        <Table header={tableHeaderUsers} data={tableDataUsers} action={false} />
      </div>
    </Layout>
  );
}
