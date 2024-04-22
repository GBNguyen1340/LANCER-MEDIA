"use client";

import SubmitButton from "@/components/button/submitButton";
import { useFormState } from "react-dom";
import Alert from "@/components/layout/shared/alert";
import { deletePhoto, uploadRoomPhoto } from "@/app/services/actions/rooms";
import { Input } from "@/components/ui/input";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import ImageItem from "./imageItem";

const initialState = { message: null, errors: {} };

export default function FormGallery({ photos, roomId }) {
  const [formState, formAction] = useFormState(uploadRoomPhoto, initialState);

  const handleDelete = async (id) => {
    console.log(`handleDelete image: ${id}`);
    const result = await deletePhoto(id);
  };

  const handleFavorite = (id) => {
    // Implement logic for handling favorites (e.g., update image state)
    console.log(`handleFavorite image: ${id}`);
  };

  return (
    <>
      <form action={formAction} className="flex flex-col gap-2 mt-4">
        {formState?.message && (
          <Alert label="Talent Updated" content={formState?.message} type={formState?.message} />
        )}
        <div className="flex flex-row gap-2 min-w-80 max-w-96">
          <input type="hidden" name="id" value={roomId}></input>
          <Input id="file" name="file" type="file" className="w-full rounded-lg px-2 font-medium" />
          <SubmitButton
            label="Upload"
            className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
          ></SubmitButton>
        </div>
      </form>
      {photos && photos.length > 0 && (
        <div className="min-h-80 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {photos.map((photo) => (
            <ImageItem
              key={photo.id}
              id={photo.id}
              url={photo.fileUrl}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      )}
      {(!photos || photos.length <= 0) && <PhotoNotFound></PhotoNotFound>}
    </>
  );
}

function PhotoNotFound() {
  return (
    <div className="min-h-80 pt-5 border rounded-sm mt-4">
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <FaceFrownIcon className="w-10 text-gray-400" />
        <p>Chưa có hình ảnh phòng live</p>
      </div>
    </div>
  );
}
