"use client";

import Image from "next/image";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function ImageItem ({ id, url, roomName, onDelete, onFavorite }) {
  return (
    <div className="relative group border rounded-md shadow-sm">
      <Image
        src={url}
        alt={roomName}
        className="w-full h-auto object-cover"
        width={200}
        height={200}
      />
      <div className="absolute inset-0 flex items-start justify-end opacity-0 group-hover:opacity-100 top-2 right-2">
        <button
          type="button"
          className="bg-red-800 hover:bg-red-700 text-white px-2 py-1 rounded focus:outline-none"
          onClick={() => onDelete(id)}
        >
          <TrashIcon className="w-4 h-4"/>
        </button>
        <button
          type="button"
          className="ml-2 bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 rounded focus:outline-none"
          onClick={() => onFavorite(id)}
        >
          <HeartIcon className="w-4 h-4"/>
        </button>
      </div>
    </div>
  );
};
