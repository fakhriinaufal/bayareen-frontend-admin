import React from "react";

export default function DropdownList({ onClick, data, className }) {
  return (
    <li
      onClick={() => onClick(data)}
      className={`p-2 border-b bg-light-gray text-dark-green transition-colors hover:bg-slate-300 text-sm ${className}`}
    >
      {data.text}
    </li>
  );
}
