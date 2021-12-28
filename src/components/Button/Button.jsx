import React from "react";

export default function Button({ text, className, onClick }) {
  return (
    <button
      className={`w-full px-4 py-3 block bg-dark-green hover:bg-dark-green-hover text-light-gray text-lg transition-colors rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
