import { getAccessToken } from "@auth0/nextjs-auth0";
import LinkButton from "@/components/button/linkButton";
import { getRooms } from "@/app/services/actions/rooms";
import { DataTable } from "@/components/ui/dataTable";
import { dataTableRoomModel } from "@/app/(adminLayout)/rooms/dataTableRoomModel";
import NoData from "@/components/layout/shared/noDataFound";

export default async function Rooms() {
  const { accessToken } = await getAccessToken();

  const data = await getRooms(accessToken);
  return (
    <>
      <div className="flex flex-row gap-8 mb-4 justify-between pr-10">
        <h1 className="text-xl font-bold">
          Phòng live-stream <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
        </h1>
        <LinkButton href="/rooms/create" label="Thêm phòng"></LinkButton>
      </div>
      <div className="divide-y divide-gray-200 border-t border-gray-200 mb-5"></div>
      {data && data.length > 0 && <DataTable columns={dataTableRoomModel} data={data}></DataTable>}
      {(!data || data.length <= 0) && <NoData />}
    </>
  );
}
