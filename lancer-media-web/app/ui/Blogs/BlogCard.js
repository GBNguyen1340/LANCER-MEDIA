"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, summary, publishDate, image }) => {
  return (
    <div className="w-full p-4">
      <Link
        href="/blog/[slug]"
        as={`/blog/${title.toLowerCase().replace(/\s/g, "-")}`}
      >
        <Image
          src={`${image}`}
          alt={`${title} Thumbnail`}
          className="w-full h-48 object-cover rounded-lg mb-4"
          height={400}
          width={400}
        />
      </Link>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{summary}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <svg
          className="w-4 h-4 mr-2 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zm3 6a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        <span>{publishDate}</span>
      </div>
      <Link
        href="/blog/[slug]"
        as={`/blog/${title.toLowerCase().replace(/\s/g, "-")}`}
        className="text-amber-500 hover:text-amber-700 mt-4 inline-block"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
