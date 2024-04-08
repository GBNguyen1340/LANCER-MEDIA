import NoData from "@/lib/noDataFound";

const BlogsTable = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return <NoData></NoData>
  return (
    <div className="overflow-x-auto rounded-md shadow">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-900">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-gray-900">Title</th>
            <th className="px-6 py-4 text-gray-900">Published Date</th>
            <th className="px-6 py-4 text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {blogs.map((blog) => (
            <tr key={blog.id} className="border-b hover:bg-gray-100">
              <td className="p-4">{blog.title}</td>
              <td className="p-4">{blog.publishedDate.toLocaleDateString()}</td>
              <td className="p-4 flex justify-end">
                <button className="btn btn-sm btn-outline">Edit</button>
                <button className="btn btn-sm btn-error ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogsTable;