"use client";

import SubmitButton from "@/components/button/submitButton";
import { useFormState } from "react-dom";
import CancelButton from "@/components/button/cancelButton";
import Alert from "@/components/layout/shared/alert";
import { InputFile } from "@/components/ui/inputFile";
import Image from "next/image";
import { updateThumbnailPicture } from "@/app/services/actions/blogs";

const initialState = { message: null, errors: {} };

export default function FormThumbnailPicture({ blog }) {
  const [formState, formAction] = useFormState(updateThumbnailPicture, initialState);

  return (
    <>
      <form
        action={formAction}
        className="mt-8 ml-8 mr-8 max-w-screen rounded-md border border-gray-200 bg-white shadow-sm p-4 "
      >
        {formState?.message && (
          <Alert label="Talent Updated" content={formState?.message} type={formState?.message} />
        )}
        <input type="hidden" name="id" value={blog?.id}></input>
        <div className="flex flex-col border-b py-2 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <h3 className="font-bold text-xl">Hình bìa</h3>
          </div>
          <CancelButton href="/blogs"></CancelButton>
          <SubmitButton
            label="Save"
            className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
          ></SubmitButton>
        </div>

        {blog?.thumbnailImgUrl && (
          <Image
            src={blog?.thumbnailImgUrl}
            alt={blog?.title}
            className="w-36 h-36 mr-2 p-2"
            width={150}
            height={150}
          />
        )}

        <InputFile name="file" label="Thay đổi hình bìa"></InputFile>
        <div className="flex justify-end py-4 sm:hidden">
          <CancelButton href="/blogs"></CancelButton>
          <SubmitButton label="Save"></SubmitButton>
        </div>
      </form>
    </>
  );
}
