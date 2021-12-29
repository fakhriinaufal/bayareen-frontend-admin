import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function UpdateProduct() {
  const [category, setCategory] = useState({
    val: null,
    text: "Cari category",
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
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="flex-col w-96 ml-12 mt-8 text-dark-green">
        <div className="text-2xl font-bold">Update Product</div>
        <form className="" action="">
          <Input name={"product-name"} text={"Product Name"} />
          <Dropdown
            text={"Product Category"}
            name={"Product Category"}
            list={mock}
            value={category}
            containerClassName={"mt-5"}
            onChange={setCategory}
          />
          <Input name={"provider"} text={"Provider"} />
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
