import React from "react";
import TableCheck from "./TableCheck";
import TableData from "./TableData";

export default function Table({
  header,
  action = true,
  data,
  error,
  className,
  deleteId,
  setDeleteId,
}) {
  if (error) return <p>Failed to get data ...</p>;

  const handleCheckDelete = (id) => {
    const found = deleteId.find((idx) => idx === id);
    if (found) {
      setDeleteId((prev) => prev.filter((idx) => idx !== id));
    } else {
      setDeleteId((prev) => [...prev, id]);
    }
  };
  return (
    <div>
      <table
        className={`table-auto text-center shadow-md overflow-hidden rounded-lg ${className}`}
      >
        <thead className="bg-light-gray text-dark-gray">
          <tr className="">
            {action && (
              <>
                <th className="border-light-gray border-x-0 px-6 py-3"></th>
                <th className="border-light-gray border-x-0 px-6 py-3"></th>
              </>
            )}
            {header.map((h, i) => {
              return <TableData key={h} header={true} text={h} />;
            })}
          </tr>
        </thead>
        <tbody className="border">
          {data?.map((obj, i) => (
            <tr className="border" key={i}>
              {action && (
                <TableCheck id={obj.id} onCheck={() => handleCheckDelete(obj.id)} />
              )}
              {Object.values(obj).map((data, j) => {
                return <TableData key={j} text={data} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
