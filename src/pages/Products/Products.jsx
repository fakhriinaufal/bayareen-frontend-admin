import DropdownImg from "../../components/DropdownImg/DropdownImg";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import ButtonImg from "../../components/ButtonImg/ButtonImg";
import filterby from "../../assets/icon/filter.svg";
import sortby from "../../assets/icon/sortby.svg";
import add from "../../assets/icon/add.svg";
import del from "../../assets/icon/delete.svg";
import update from "../../assets/icon/update.svg";
import { useState } from "react";
import Table from "../../components/Table/Table";

export default function Products() {
  const [sort, setSort] = useState({
    val: null,
    text: "Sort By",
  });
  const [filter, setFilter] = useState({
    val: null,
    text: "Filter By",
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
      <div className="ml-10 mt-8 mr-10">
        <h2 className="text-3xl font-bold text-dark-gray">Products</h2>
        <div className="my-5 flex items-start gap-4">
          <Search placeholder={"Search"} />
          <DropdownImg
            icon={sortby}
            name={"sort"}
            list={mock}
            value={sort}
            onChange={setSort}
            containerClassName={"w-40"}
          />
          <DropdownImg
            icon={filterby}
            name={"filter"}
            list={mock}
            value={filter}
            onChange={setFilter}
            containerClassName={"w-40 mr-14"}
          />
          <ButtonImg
            alt={"add product"}
            icon={add}
            text={"Add Product"}
            className={"w-fit text-base py-3"}
          />
          <ButtonImg
            alt={"update product"}
            icon={update}
            text={"Update Product"}
            className={"w-fit text-base py-3 bg-blue-600 hover:bg-blue-700"}
          />
          <ButtonImg
            alt={"delete product"}
            icon={del}
            text={"Delete Product"}
            className={"w-fit text-base py-3 bg-red-600 hover:bg-red-700"}
          />
        </div>
        <Table />
      </div>
    </Layout>
  );
}
