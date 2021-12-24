import React from "react";
import update from "../../assets/icon/update.svg";

export default function ButtonUpdate({ text, className, onClick }) {
  return (
    <button
      className={`inline-flex items-center justify-center w-full px-4 py-3 bg-dark-green hover:bg-dark-green-hover text-light-gray text-lg transition-colors rounded-md shadow-lg ${className}`}
      onClick={onClick}
    >
      <img src={update} alt="update" className="mr-2" />
      {text}
    </button>
  );
}
