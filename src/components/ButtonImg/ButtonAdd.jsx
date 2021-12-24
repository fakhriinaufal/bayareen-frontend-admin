import React from "react";
import add from "../../assets/icon/add.svg";

export default function ButtonAdd({ text, className, onClick }) {
  return (
    <button
      className={`inline-flex items-center justify-center w-full px-4 py-3 bg-dark-green hover:bg-dark-green-hover text-light-gray text-lg transition-colors rounded-md shadow-lg ${className}`}
      onClick={onClick}
    >
      <img src={add} alt="add" className="mr-2" />
      {text}
    </button>
  );
}
