import React from "react";
import TableCheck from "./TableCheck";
import TableData from "./TableData";

export default function Table({
  header,
  action = true,
  data,
  error,
  onDelete,
  onUpdate,
  className,
}) {
  if (error) return <p>Failed to get data ...</p>;
  return (
    <div>
      <table
        className={`table-auto text-center shadow-md overflow-hidden rounded-lg ${className}`}
      >
        <thead className="bg-light-gray text-dark-gray">
          <tr className="">
            {header.map((h, i) => {
              return <TableData key={h} header={true} text={h} />;
            })}
            {action && (
              <th className="border-light-gray border-x-0 px-6 py-3"></th>
            )}
          </tr>
        </thead>
        <tbody className="border">
          {data?.map((obj, i) => (
            <tr className="border" key={i}>
              {Object.values(obj).map((data, j) => {
                return <TableData key={j} text={data} />;
              })}
              {action && <TableCheck />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
