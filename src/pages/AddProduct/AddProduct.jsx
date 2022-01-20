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
import ReactLoading from "react-loading";

export default function AddProduct() {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [newProvider, setNewProvider] = useState("");
  const [err, setErr] = useState("");
  const [err2, setErr2] = useState("");

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
    if (
      provider.val === null ||
      category.val === null ||
      productName === "" ||
      price === 0
    ) {
      setErr("Each field must be filled");
      return;
    }
    setErr("");
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
    if (newProvider === "" || category2.val === null) {
      setErr2("Each field must be filled");
      return;
    }
    setErr2("");
    const prov = {
      cat_id: category2.val,
      name: newProvider,
    };
    addProviders(prov);
    navigate("/");
  };

  return (
    <Layout sidebar={<Sidebar />}>
      {error && <p>{error}</p>}
      {loading ? (
        <ReactLoading
          type={"spokes"}
          color={"#83C5BE"}
          height={175}
          width={175}
          className="mx-auto mt-24"
        />
      ) : (
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
              {<p className="text-red-500">{err}</p>}
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
              {<p className="text-red-500">{err2}</p>}
              <Button text="Add Provider" className="mt-10 mx-auto" />
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
