import Image from "next/image";
import LatestArticle from "@/app/ui/Blogs/LatestArticle";
import ListBlog from "@/app/ui/Blogs/ListBlog";

export default function blogs() {
  return (
    <div className="mt-[72px]">
      <LatestArticle></LatestArticle>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              From the blog
            </h1>

            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <hr className="my-8 border-amber-300 dark:border-amber-300" />
          <ListBlog></ListBlog>         
        </div>
      </section>
    </div>
  );
}
