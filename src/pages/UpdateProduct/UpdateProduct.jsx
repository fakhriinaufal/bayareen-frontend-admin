import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUpdateProducts from "../../hooks/useUpdateProducts";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function UpdateProduct({ refetch }) {
  const navigate = useNavigate();

  const data = useSelector((state) => state.product.data);
  const { id } = useParams("id");
  const updatedData = data.find((i) => i.id === parseInt(id));

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [productName, setProductName] = useState(updatedData.name);
  const [price, setPrice] = useState(updatedData.price);
  const [status, setStatus] = useState({
    val: updatedData.status === "Available" ? true : false,
    text: updatedData.status,
  });
  const [err, setErr] = useState("");
  const statusOption = [
    {
      text: "Available",
      val: true,
    },
    {
      text: "Unavailable",
      val: false,
    },
  ];

  const {
    updateProducts,
    loading: loadingUpdateProducts,
    error: errorUpdateProducts,
  } = useUpdateProducts();

  const submitHandler = (e) => {
    e.preventDefault();
    if (productName === "" || price === "" || price === "0") {
      setErr("Each field must be filled");
      return;
    }
    setErr("");
    const listProduct = {
      id: updatedData.id,
      name: productName,
      cat_id: updatedData.catId,
      provider_id: updatedData.provId,
      price: parseInt(price),
      status: status.val,
    };
    updateProducts(listProduct);
    refetch();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (!errorUpdateProducts && !loadingUpdateProducts && isSubmitted) {
      navigate("/");
    }
  }, [isSubmitted, errorUpdateProducts, loadingUpdateProducts]);

  return (
    <Layout sidebar={<Sidebar />}>
      {errorUpdateProducts && (
        <p className="text-red-500">{errorUpdateProducts.message}</p>
      )}
      {loadingUpdateProducts ? (
        <ReactLoading
          type={"spokes"}
          color={"#83C5BE"}
          height={175}
          width={175}
          className="mx-auto mt-24"
        />
      ) : (
        <div className="flex-col w-96 ml-12 mt-8 text-dark-green">
          <div className="text-2xl font-bold">Update Product</div>
          <form className="" onSubmit={submitHandler}>
            <Input
              name={"product-name"}
              text={"Product Name"}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Input
              name={"price"}
              type={"number"}
              text={"Price"}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Dropdown
              text={"Status"}
              name={"status"}
              list={statusOption}
              value={status}
              containerClassName={"mt-5"}
              onChange={setStatus}
            />
            {<p className="text-red-500">{err}</p>}
            <Button text="Submit" className="mt-10" />
          </form>
        </div>
      )}
    </Layout>
  );
}
