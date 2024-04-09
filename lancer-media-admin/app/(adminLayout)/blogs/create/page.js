"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
//import Tiptap from "@/ui/blogs/tiptap";
import QuillEditor from "@/ui/blogs/quillEditor";
import SubmitButton from "@/ui/submitButton";
import createUpdateItem from "@/lib/blogs/actions";

const initialState = {
  message: "",
};

export default function CreateBlogs() {
  const [content, setContent] = useState("");

  const [state, updateBlog] = useFormState(createUpdateItem, initialState);

  const handleContentChange = (content) => {
    setContent(content);
  };

  return (
    <form
      action={updateBlog}
      className="m-8 max-w-screen rounded-md border border-gray-200 bg-white shadow-sm p-4"
    >
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <div className="flex flex-col border-b py-2 sm:flex-row sm:items-start">
        <div className="shrink-0 mr-auto sm:py-3">
          <p className="font-medium">Blog post</p>
          <p className="text-sm text-gray-600">Edit your blog post</p>
        </div>
        <button className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
          Cancel
        </button>
        <SubmitButton
          label="Save"
          className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
        />
      </div>
      <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
        <p className="shrink-0 w-32 font-medium">Title</p>
        <input
          placeholder="input blog title"
          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          name="title"
          id="title"
        />
      </div>
      <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
        <p className="shrink-0 w-32 font-medium">Summary</p>
        <textarea
          placeholder="input blog summary"
          className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
          name="summary"
          id="summary"
        />
      </div>
      <div className="flex flex-col gap-4 py-4  lg:flex-row">
        <p className="shrink-0 w-32  font-medium">Thumbnail</p>
        <div className="flex h-20 w-full flex-col gap-4 rounded-md border border-dashed border-gray-300 p-5 text-center">
          <input
            type="file"
            className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
            name="file"
            id="file"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <p className="shrink-0 w-32 font-medium">Content</p>
        <div className="w-full">
          <input type="hidden" name="content" value={content} />
          {/* <Tiptap
            content={content}
            onChange={(newContent) => handleContentChange(newContent)}
            name="contentEditor"
            id="contentEditor"
          /> */}
          <QuillEditor
            content={content}
            onChange={(newContent) => handleContentChange(newContent)}
            name="contentEditor"
            id="contentEditor"
          />
        </div>
      </div>
      <div className="flex justify-end py-4 sm:hidden">
        <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
          Cancel
        </button>
        <SubmitButton
          label="Save"
          className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
        />
      </div>
    </form>
  );
}
