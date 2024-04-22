"use client";

import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { SelectWithLabel } from "@/components/ui/selectWithLabel";
import { FormStateMessage, RoomType } from "@/app/services/enum";
import SubmitButton from "@/components/button/submitButton";
import { useFormState } from "react-dom";
import { createRoom } from "@/app/services/actions/rooms";
import RichTextEditor from "@/components/ui/richTextEditor";
import { useEffect, useRef, useState } from "react";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import CancelButton from "@/components/button/cancelButton";
import Alert from "@/components/layout/shared/alert";

const initialState = { message: null, errors: {} };

export default function FormCreateRoom({ room }) {
  const [formState, formAction] = useFormState(createRoom, initialState);
  const formRef = useRef(null);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [contentStateRaw, setContentStateRaw] = useState();

  const onEditorStateChange = (newEditorState) => {
    let contentState = newEditorState.getCurrentContent();
    let content = convertToRaw(contentState);
    setContentStateRaw(JSON.stringify(content));
    setEditorState(newEditorState);
  };

  useEffect(() => {
    const content = ContentState.createFromText("");
    const editorState = EditorState.createWithContent(content);
    const contentRaw = convertToRaw(content);
    setContentStateRaw(JSON.stringify(contentRaw));
    setEditorState(editorState);

  }, [])

  useEffect(() => {
    console.log("formState", formState);
    if (formState.message === FormStateMessage.SUCCESS) {
      formRef.current?.reset();
    }
  }, [formState]);

  return (
    <form
      action={formAction}
      className="m-8 max-w-screen rounded-md border border-gray-200 bg-white shadow-sm p-4 pb-12"
      ref={formRef}
    >
      {formState.message && (
        <Alert label="Room Updated" content={formState?.message} type={formState?.message} />
      )}
      <input type="hidden" name="id" value={room?.id}></input>
      <div className="flex flex-col border-b py-2 sm:flex-row sm:items-start">
        <div className="shrink-0 mr-auto sm:py-3">
          <h3 className="font-bold text-xl">Thông tin phòng livestream</h3>
        </div>
        <CancelButton href="/rooms"></CancelButton>
        <SubmitButton
          label="Save"
          className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
        ></SubmitButton>
      </div>
      <InputWithLabel id="name" label="Tiêu đề" value={room?.name} required></InputWithLabel>
      {formState.errors?.type &&
        formState.errors.type.map((error) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      <SelectWithLabel
        id="type"
        label="Loại phòng"
        values={RoomType}
        selected={room?.type}
      ></SelectWithLabel>
      <div id="price-error" aria-live="polite" aria-atomic="true">
        {formState.errors?.price &&
          formState.errors.price.map((error) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <InputWithLabel
        id="price"
        label="Giá phòng"
        value={room?.price}
        aria-describedby="price-error"
        required
      ></InputWithLabel>

      <input id="description" name="description" value={contentStateRaw} type="hidden"></input>
      <RichTextEditor
        id="descriptionRichTextEditor"
        name="descriptionRichTextEditor"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        label="Mô tả phòng"
      />
      <div className="flex justify-end py-4 sm:hidden">
        <CancelButton href="/rooms"></CancelButton>
        <SubmitButton label="Save"></SubmitButton>
      </div>
    </form>
  );
}
