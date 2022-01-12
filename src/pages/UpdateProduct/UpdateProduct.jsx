import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useGetCategories from "../../hooks/useGetCategories";
import useGetProviders from "../../hooks/useGetProviders";

export default function UpdateProduct() {
  const { state } = useLocation();
  console.log(state);
  const [category, setCategory] = useState({
    val: null,
    text: "Cari category",
  });
  const [provider, setProvider] = useState({
    val: null,
    text: "Cari provider",
  });
  const [status, setStatus] = useState({
    val: null,
    text: "Available",
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
  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useGetCategories();
  const {
    providers,
    loading: loadingProv,
    error: errorProv,
  } = useGetProviders(category.val);

  const loading = loadingCategories || loadingProv;
  const error = errorCategories || errorProv;
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="flex-col w-96 ml-12 mt-8 text-dark-green">
        <div className="text-2xl font-bold">Update Product</div>
        <form className="" action="">
          <Input name={"product-name"} text={"Product Name"} />
          <Dropdown
            text={"Product Category"}
            name={"Product Category"}
            list={categories}
            value={category}
            containerClassName={"mt-5"}
            onChange={setCategory}
          />
          <Dropdown
            text={"Providers"}
            name={"providers"}
            list={providers}
            value={provider}
            containerClassName={"mt-5"}
            onChange={setProvider}
          />
          <Input name={"price"} type={"number"} text={"Price"} />
          <Dropdown
            text={"Status"}
            name={"status"}
            list={mock}
            value={status}
            containerClassName={"mt-5"}
            onChange={setStatus}
          />
          <Button text="Submit" className="mt-10" />
        </form>
      </div>
    </Layout>
  );
}
