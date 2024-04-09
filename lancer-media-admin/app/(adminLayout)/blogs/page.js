import BlogsManagement from "@/ui/blogs/blogManagement";
import LinkButton from "@/ui/linkButton";


export default function Blogs() {
  return (
    <>
      <div className="flex flex-row gap-8 mb-4">
        <h1 className="text-xl font-bold">Blog Posts Management <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
        <LinkButton href="/blogs/create" label="Create new blog post"></LinkButton>
      </div>
      <div className="divide-y divide-gray-200 border-t border-gray-200"></div>
      <BlogsManagement></BlogsManagement>
    </>
  );
}
