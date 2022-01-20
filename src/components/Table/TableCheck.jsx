import React from "react";
import ButtonImg from "../ButtonImg/ButtonImg";
import update from "../../assets/icon/update.svg";
import { useNavigate } from "react-router-dom";

export default function TableCheck({ onCheck, id, isChecked }) {
  const navigate = useNavigate();
  return (
    <>
      <td className="px-5 py-3">
        <input onChange={onCheck} type="checkbox" checked={isChecked} />
      </td>
      <td>
        <ButtonImg
          alt={"update product"}
          icon={update}
          className={"w-fit text-base px-2 py-2 bg-blue-600 hover:bg-blue-700 "}
          onClick={() => navigate(`/update-product/${id}`)}
          imgClassName={"mr-0"}
        />
      </td>
    </>
  );
}
