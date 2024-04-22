import { getRoomById, getRoomPhoto } from "@/app/services/actions/rooms";
import FormEditRoom from "./formEdit";
import FormGallery from "./formGallery";

export default async function RoomDetail({ params }) {

  const roomData = getRoomById(params?.id);
  const photosData = getRoomPhoto(params?.id);

  // Wait for the promises to resolve
  const [room, photos] = await Promise.all([roomData, photosData])

  return (
    <>
      <FormEditRoom room={room}></FormEditRoom>
      <div className="m-8 max-w-screen rounded-md border border-gray-200 bg-white shadow-sm p-4">
        {/* room galaries area here */}
        <h3 className="font-bold text-xl">Hình ảnh phòng</h3>
        <FormGallery photos={photos} roomId={room.id}></FormGallery>
      </div>
    </>
  );
}
