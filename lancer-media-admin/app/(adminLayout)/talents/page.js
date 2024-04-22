import { getAccessToken } from "@auth0/nextjs-auth0";
import LinkButton from "@/components/button/linkButton";
import { getTalents } from "@/app/services/actions/talents";
import { DataTable } from "@/components/ui/dataTable";
import { dataTableTalentModel } from "@/app/(adminLayout)/talents/dataTableTalentModel";
import NoData from "@/components/layout/shared/noDataFound";

export default async function Rooms() {
  const { accessToken } = await getAccessToken();
  const data = await getTalents(accessToken);

  return (
    <>
      <div className="flex flex-row gap-8 mb-4 justify-between pr-10">
        <h1 className="text-xl font-bold">
          Danh sách talents <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
        </h1>
        <LinkButton href="/talents/create" label="Thêm talents"></LinkButton>
      </div>
      <div className="divide-y divide-gray-200 border-t border-gray-200 mb-5"></div>
      {data && data.length > 0 && <DataTable columns={dataTableTalentModel} data={data}></DataTable>}
      {(!data || data.length <= 0) && <NoData />}
    </>
  );
}
