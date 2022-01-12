import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetCategories from "../../hooks/useGetCategories";
import useGetProviders from "../../hooks/useGetProviders";
import useAddProducts from "../../hooks/useAddProducts";
import useAddProviders from "../../hooks/useAddProviders";

export default function AddProduct() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [newProvider, setNewProvider] = useState("");

  const [category, setCategory] = useState({
    val: null,
    text: "Cari category",
  });

  const [provider, setProvider] = useState({
    val: null,
    text: "Cari provider",
  });
  const [category2, setCategory2] = useState({
    val: null,
    text: "Cari category",
  });
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
  const {
    addProducts,
    loading: loadingAddProduct,
    error: errorAddProduct,
  } = useAddProducts();
  const {
    addProviders,
    loading: loadingAddProviders,
    error: errorAddProviders,
  } = useAddProviders();

  const loading =
    loadingCategories ||
    loadingProv ||
    loadingAddProduct ||
    loadingAddProviders;
  const error =
    errorCategories || errorProv || errorAddProduct || errorAddProviders;

  const submitHandler = (e) => {
    e.preventDefault();
    const listProduct = {
      provider_id: provider.val,
      cat_id: category.val,
      name: productName,
      price: parseInt(price),
      status: true,
    };
    addProducts(listProduct);
    navigate("/");
  };

  const addProviderHandler = (e) => {
    e.preventDefault();
    const prov = {
      cat_id: category.val,
      name: newProvider,
    };
    addProviders(prov);
    navigate("/");
  };
  console.log(loading, "load");
  console.log(error, "err");
  return (
    <Layout sidebar={<Sidebar />}>
      {!loading && !error && (
        <div className="flex-col ml-12 mt-8 text-dark-green">
          <div className="text-2xl font-bold">Add New Product</div>
          <div className="flex justify-between">
            <form className="w-[30em]" onSubmit={submitHandler}>
              <Input
                name={"product-name"}
                text={"Product Name"}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <Dropdown
                text={"Product Category"}
                name={"product-category"}
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
              <Input
                name={"price"}
                type={"number"}
                text={"Price"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <Button text="Submit" className="mt-10 mx-auto" />
            </form>
            <form className="w-[30em] mr-24" onSubmit={addProviderHandler}>
              <Dropdown
                text={"Product Category"}
                name={"product-category"}
                list={categories}
                value={category2}
                containerClassName={"mt-5"}
                onChange={setCategory2}
              />
              <Input
                name={"product-provider"}
                text={"Add New Provider"}
                value={newProvider}
                onChange={(e) => setNewProvider(e.target.value)}
              />

              <Button text="Add Provider" className="mt-10 mx-auto" />
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
