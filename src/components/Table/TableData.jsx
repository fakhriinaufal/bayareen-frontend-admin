import React from "react";

export default function TableData({ text, header = false }) {
  if (header) return <th className="font-thin px-5 py-3">{text}</th>;
  return <th className="font-thin px-5 py-3">{text}</th>;
}
