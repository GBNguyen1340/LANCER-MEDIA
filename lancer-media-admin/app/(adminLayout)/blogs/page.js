import LinkButton from "@/components/button/linkButton";
import { dataTableBlogModel } from "./dataTableBlogModel";
import { getBlogs } from "@/app/services/actions/blogs";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { DataTable } from "@/components/ui/dataTable";
import NoData from "@/components/layout/shared/noDataFound";

export default async function Blogs() {
  const { accessToken } = await getAccessToken();
  const data = await getBlogs(accessToken);

  return (
    <>
      <div className="flex flex-row gap-8 mb-4 justify-between pr-10">
        <h1 className="text-xl font-bold">
          Danh sách bài viết <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
        </h1>
        <LinkButton href="/blogs/create" label="Thêm bài viết"></LinkButton>
      </div>
      <div className="divide-y divide-gray-200 border-t border-gray-200 mb-5"></div>
      {data && data.length > 0 && <DataTable columns={dataTableBlogModel} data={data}></DataTable>}
      {(!data || data.length <= 0) && <NoData />}
    </>
  );
}
