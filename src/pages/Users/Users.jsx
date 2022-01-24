import { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import DropdownImg from "../../components/DropdownImg/DropdownImg";
import sortby from "../../assets/icon/sortby.svg";
import Table from "../../components/Table/Table";
import ReactLoading from "react-loading";

export default function Users({
  sort,
  setSort,
  convertUsers,
  loadingUsers,
  errorUsers,
  refetch,
}) {
  const listSort = [
    {
      text: "Oldest",
      val: "asc",
    },
    {
      text: "Latest",
      val: "desc",
    },
  ];

  const tableHeader = ["ID", "Name", "Phone Number", "Email", "Created At"];

  useEffect(() => {
    refetch({
      created_at: sort.val,
    });
  }, [sort.val]);

  return (
    <Layout sidebar={<Sidebar />}>
      {loadingUsers ? (
        <ReactLoading
          type={"spokes"}
          color={"#83C5BE"}
          height={175}
          width={175}
          className="mx-auto mt-24"
        />
      ) : (
        <div className="flex-col ml-10 mt-8 mr-10">
          <div className="text-3xl font-bold text-dark-gray">Users</div>
          <div className="inline-flex mt-4 mb-8">
            <Search containerClassName={"mr-4"} placeholder={"Search"} />
            <DropdownImg
              icon={sortby}
              name={"sort"}
              list={listSort}
              value={sort}
              onChange={setSort}
              containerClassName={"w-40"}
            />
          </div>
          <Table
            data={convertUsers}
            header={tableHeader}
            error={errorUsers}
            action={false}
          />
        </div>
      )}
    </Layout>
  );
}
