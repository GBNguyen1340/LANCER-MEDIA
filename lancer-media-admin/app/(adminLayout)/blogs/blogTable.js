import NoData from "../../../components/layout/shared/noDataFound";

const BlogsTable = ({ blogs }) => {
  return (
    <>
      {blogs && blogs.length > 0 && (
        <DataTable columns={dataTableTalentModel} data={blogs}></DataTable>
      )}
      {(!blogs || blogs.length <= 0) && <NoData />}
    </>
  );
};

export default BlogsTable;
