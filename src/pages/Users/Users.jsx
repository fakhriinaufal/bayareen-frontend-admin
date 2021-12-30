import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import DropdownImg from "../../components/DropdownImg/DropdownImg";
import sortby from "../../assets/icon/sortby.svg";
import Table from "../../components/Table/Table";
export default function Users(props) {
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
        <div className="text-2xl font-bold text-dark-green">Users</div>
        <div className="inline-flex mt-4">
          <Search containerClassName={"mr-4"} />
          <DropdownImg
            icon={sortby}
            name={"sort"}
            list={mock}
            value={sort}
            onChange={setSort}
            containerClassName={"w-40"}
          />
        </div>
        <Table className={"mt-10"} />
      </div>
    </Layout>
  );
}
