import React from "react";

export default function TableCheck({ onCheck }) {
  return (
    <td className="px-5 py-3">
      <input onChange={onCheck} type="checkbox" />
    </td>
  );
}
