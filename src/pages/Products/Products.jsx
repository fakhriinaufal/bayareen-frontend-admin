import DropdownImg from "../../components/DropdownImg/DropdownImg";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import ButtonImg from "../../components/ButtonImg/ButtonImg";
import sortby from "../../assets/icon/sortby.svg";
import add from "../../assets/icon/add.svg";
import del from "../../assets/icon/delete.svg";
import Table from "../../components/Table/Table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteProducts from "../../hooks/useDeleteProducts";
import ReactLoading from "react-loading";

export default function Products({
  sort,
  setSort,
  displayProducts,
  loadingProducts,
  errorProducts,
  refetch,
}) {
  const navigate = useNavigate();

  const [deleteId, setDeleteId] = useState([]);

  const [filter, setFilter] = useState({
    val: null,
    text: "Filter By",
  });

  const listSort = [
    {
      text: "Oldest",
      val: "asc",
    },
    {
      text: "Latest",
      val: "desc",
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

  const {
    deleteProducts,
    loading: loadingDelProducts,
    error: errorDelProducts,
  } = useDeleteProducts();

  const deleteHandler = () => {
    deleteProducts(deleteId);
    refetch();
  };

  const loading = loadingProducts || loadingDelProducts;
  const error = errorProducts || errorDelProducts;

  useEffect(() => {
    refetch({
      created_at: sort.val,
    });
  }, [sort.val]);

  return (
    <Layout sidebar={<Sidebar />}>
      {loading ? (
        <ReactLoading
          type={"spokes"}
          color={"#83C5BE"}
          height={175}
          width={175}
          className="mx-auto mt-24"
        />
      ) : (
        <div className="ml-10 mt-8 mr-10">
          <h2 className="text-3xl font-bold text-dark-gray">Products</h2>
          <div className="my-5 flex items-start gap-4">
            <Search placeholder={"Search"} />
            <DropdownImg
              icon={sortby}
              name={"sort"}
              list={listSort}
              value={sort}
              onChange={setSort}
              containerClassName={"w-40"}
            />
            <ButtonImg
              alt={"add product"}
              icon={add}
              text={"Add Product"}
              className={"w-fit text-base py-3 md:ml-60 sm:ml-0"}
              onClick={() => navigate("/add-product")}
            />
            <ButtonImg
              alt={"delete product"}
              icon={del}
              text={"Delete Product"}
              className={"w-fit text-base py-3 bg-red-600 hover:bg-red-700"}
              onClick={deleteHandler}
            />
          </div>
          <Table
            data={displayProducts}
            header={tableHeader}
            error={error}
            setDeleteId={setDeleteId}
            deleteId={deleteId}
          />
        </div>
      )}
    </Layout>
  );
}
