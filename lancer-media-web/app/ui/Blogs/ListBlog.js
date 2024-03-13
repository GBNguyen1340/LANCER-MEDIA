import { posts } from "@/app/data/staticData";
import BlogCard from '@/app/ui/Blogs/BlogCard';

const ListBlog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {posts.map((post) => (
        <BlogCard key={post.title} {...post} />
      ))}
    </div>
  );
};

export default ListBlog;
