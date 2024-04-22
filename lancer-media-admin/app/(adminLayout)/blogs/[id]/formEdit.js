"use client";

import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { FormStateMessage } from "@/app/services/enum";
import SubmitButton from "@/components/button/submitButton";
import { useFormState } from "react-dom";
import { updateBlog } from "@/app/services/actions/blogs";
import RichTextEditor from "@/components/ui/richTextEditor";
import { useEffect, useRef, useState } from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import CancelButton from "@/components/button/cancelButton";
import Alert from "@/components/layout/shared/alert";

const initialState = { message: null, errors: {} };

export default function FormEditBlog({ blog }) {
  const [formState, formAction] = useFormState(updateBlog, initialState);
  const formRef = useRef(null);

  const [editorState, setEditorState] = useState();
  const [contentStateRaw, setContentStateRaw] = useState(blog.fullContent);

  const onEditorStateChange = (newEditorState) => {
    let contentState = newEditorState.getCurrentContent();
    let content = convertToRaw(contentState);
    setContentStateRaw(JSON.stringify(content));
    setEditorState(newEditorState);
  };

  useEffect(() => {
    let content = convertFromRaw(JSON.parse(blog.fullContent));
    setEditorState(EditorState.createWithContent(content));
  }, []);

  useEffect(() => {
    console.log("formState", formState);
    if (formState.message === FormStateMessage.SUCCESS) {
      formRef.current?.reset();
    }
  }, [formState]);

  return (
    <>
      <form
        action={formAction}
        className="m-8 max-w-screen rounded-md border border-gray-200 bg-white shadow-sm p-4 pb-12"
        ref={formRef}
      >
        {formState.message && (
          <Alert label="Talent Updated" content={formState?.message} type={formState?.message} />
        )}
        <input type="hidden" name="id" value={blog?.id}></input>
        <div className="flex flex-col border-b py-2 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <h3 className="font-bold text-xl">Thông tin bài viết</h3>
          </div>
          <CancelButton href="/blogs"></CancelButton>
          <SubmitButton
            label="Save"
            className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
          ></SubmitButton>
        </div>
        {formState.errors?.type &&
        formState.errors.type.map((error) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}      
      <InputWithLabel id="title" label="Tiêu đề" value={blog?.title} required></InputWithLabel>
      {formState.errors?.type &&
        formState.errors.type.map((error) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}      
      <InputWithLabel id="summary" label="Tóm tắt" value={blog?.summary} required></InputWithLabel>
        
        <input id="content" name="content" value={contentStateRaw} type="hidden"></input>
        <RichTextEditor
          id="fullContentRichTextEditor"
          name="fullContentRichTextEditor"
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          label="Nội dung bài viết"
        />
        <div className="flex justify-end py-4 sm:hidden">
          <CancelButton href="/blogs"></CancelButton>
          <SubmitButton label="Save"></SubmitButton>
        </div>
      </form>
    </>
  );
}
