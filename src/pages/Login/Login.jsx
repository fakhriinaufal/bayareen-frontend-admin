import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function Login() {
  return (
    <div className="flex justify-center item items-center h-screen">
      <div className="box-border w-1/3 border-2 border-dark-green px-10 py-5 text-dark-green">
        <form className="" action="">
          <Input
            name={"username"}
            text={"Username"}
            labelClassName={"font-semibold text-lg"}
          />
          <Input
            name={"password"}
            type={"password"}
            text={"Password"}
            labelClassName={"font-semibold text-lg"}
          />
          <Button text={"Login"} className="mt-10 mb-5" />
        </form>
      </div>
    </div>
  );
}
