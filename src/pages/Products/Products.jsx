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
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import useSubscribeProducts from "../../hooks/useSubscribeProducts";

export default function Products() {
  // const isLogin = false;
  // if (!isLogin) return <Login />;
  const [deleteId, setDeleteId] = useState([]);

  const navigate = useNavigate();

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

  const tableHeader = [
    "ID",
    "Product Name",
    "Price",
    "Status",
    "Provider",
    "Category",
    "Created At",
  ];
  const { convertProducts, loadingProducts, errorProducts } =
    useSubscribeProducts();
  console.log(deleteId);
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
            onClick={() => navigate("/add-product")}
          />
          <ButtonImg
            alt={"delete product"}
            icon={del}
            text={"Delete Product"}
            className={"w-fit text-base py-3 bg-red-600 hover:bg-red-700"}
          />
        </div>
        {!loadingProducts && (
          <Table
            data={convertProducts}
            header={tableHeader}
            error={errorProducts}
            setDeleteId={setDeleteId}
            deleteId={deleteId}
          />
        )}
      </div>
    </Layout>
  );
}
