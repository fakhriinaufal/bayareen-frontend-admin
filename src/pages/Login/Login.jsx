import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import useLoginAdmin from "../../hooks/useLoginAdmin";
import { useState } from "react";
import ReactLoading from "react-loading";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const { loginAdmin, loading, error } = useLoginAdmin();
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setErr("Each field must be filled");
      return;
    }
    setErr("");
    loginAdmin({
      name: name,
      password: password,
    });
  };

  return (
    <div className="flex justify-center item items-center h-screen">
      <div className="box-border w-[32em] border-2 border-dark-green px-10 py-5 text-dark-green">
        <form className="" onSubmit={submitHandler}>
          <Input
            name={"username"}
            text={"Username"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            labelClassName={"font-semibold text-lg"}
          />
          <Input
            name={"password"}
            type={"password"}
            text={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            labelClassName={"font-semibold text-lg"}
          />
          {err && <p className="text-red-500">{err}</p>}
          {error && <p className="text-red-500">{error.message}</p>}
          {!loading ? (
            <Button text={"Login"} className="mt-10 mb-5" />
          ) : (
            <ReactLoading
              type={"spokes"}
              color={"#83C5BE"}
              height={50}
              width={50}
              className="mx-auto mt-10"
            />
          )}
        </form>
      </div>
    </div>
  );
}
