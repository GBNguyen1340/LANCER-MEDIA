"use client";
import React, { useState } from "react";

const BlogsFilter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ title, publishedDate });
  };

  return (
    <div className="max-w-screen mb-10 rounded-md border border-gray-200 bg-white shadow-sm">
      <form onSubmit={handleSubmit} className="max-w-screen-md px-6 py-2">
        <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-stone-600 text-sm font-medium"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="publishedDate"
              className="text-stone-600 text-sm font-medium"
            >
              Published Date:
            </label>
            <input
              type="date"
              id="publishedDate"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div className="mt-6 grid w-full grid-cols-3 justify-end space-x-4 md:flex">
          <button
            type="submit"
            className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogsFilter;