import React, { useState } from "react";
import ButtonImg from "../../components/ButtonImg/ButtonImg";
import DropdownImg from "../../components/DropdownImg/DropdownImg";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import sortby from "../../assets/icon/sortby.svg";
import add from "../../assets/icon/add.svg";
import del from "../../assets/icon/delete.svg";
import Table from "../../components/Table/Table";
import Login from "../Login/Login";
import useSubscribeAdmins from "../../hooks/useSubscribeAdmins";

export default function Admins() {
  // const isLogin = false;
  // if (!isLogin) return <Login />;

  const [sort, setSort] = useState({
    val: null,
    text: "Sort By",
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

  const tableHeader = ["ID", "Username", "Created At"];
  const { convertAdmins, loadingAdmins, errorAdmins } = useSubscribeAdmins();
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="ml-10 mt-8 mr-10">
        <h2 className="text-3xl font-bold text-dark-gray">Admins</h2>
        <div className="mt-5 mb-8 flex items-start gap-4">
          <Search placeholder={"Search"} />
          <DropdownImg
            icon={sortby}
            name={"sort"}
            list={mock}
            value={sort}
            onChange={setSort}
            containerClassName={"w-40 mr-10"}
          />
          <ButtonImg
            alt={"add admin"}
            icon={add}
            text={"Create New Admin"}
            className={"w-fit text-base py-3"}
          />
          <ButtonImg
            alt={"delete admin"}
            icon={del}
            text={"Delete Selected"}
            className={"w-fit text-base py-3 bg-red-600 hover:bg-red-700"}
          />
        </div>
        {!loadingAdmins && (
          <Table
            data={convertAdmins}
            header={tableHeader}
            error={errorAdmins}
          />
        )}
      </div>
    </Layout>
  );
}
