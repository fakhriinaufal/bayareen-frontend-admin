import React from "react";
import TableCheck from "./TableCheck";
import TableData from "./TableData";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export default function Table({
  header,
  action = true,
  data,
  error,
  className,
  deleteId,
  setDeleteId,
}) {
  let objectDeleteId = {};
  if (deleteId !== undefined) {
    for (let i = 0; i < deleteId.length; i++) {
      objectDeleteId[deleteId[i]] = true;
    }
  }

  const [pageNumber, setPageNumber] = useState(0);
  const datasPerPage = 10;
  const pageVisited = pageNumber * datasPerPage;
  const pageCount = Math.ceil(data?.length / datasPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayDatas = data
    ?.slice(pageVisited, pageVisited + datasPerPage)
    .map((obj, i) => {
      return (
        <tr className="border" key={i}>
          {action && (
            <TableCheck
              id={obj.id}
              onCheck={() => handleCheckDelete(obj.id)}
              isChecked={objectDeleteId[obj.id] !== undefined}
            />
          )}
          {Object.values(obj).map((data, j) => {
            return <TableData key={j} text={data} />;
          })}
        </tr>
      );
    });

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
          {/* {data?.map((obj, i) => (
            <tr className="border" key={i}>
              {action && (
                <TableCheck
                  id={obj.id}
                  onCheck={() => handleCheckDelete(obj.id)}
                />
              )}
              {Object.values(obj).map((data, j) => {
                return <TableData key={j} text={data} />;
              })}
            </tr>
          ))} */}
          {displayDatas}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"flex justify-center list-none my-5"}
        pageLinkClassName={
          "border px-3 py-1 mx-1 hover:bg-light-green hover:text-white rounded"
        }
        previousLinkClassName={
          "border px-3 py-1 mx-1 hover:bg-light-green hover:text-white rounded"
        }
        nextLinkClassName={
          "border px-3 py-1 mx-1 hover:bg-light-green hover:text-white rounded"
        }
        activeLinkClassName={"bg-light-green text-white"}
        disabledLinkClassName={
          "text-gray-500 hover:text-gray-500 hover:bg-white hover:cursor-default"
        }
      />
    </div>
  );
}
