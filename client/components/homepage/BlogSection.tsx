import {BlogCard} from "../blogspage/BlogCard";
import Link from "next/link";
function BlogSection() {
  return (
    <div>
      <h1 className="flex flex-col items-center">Blogs</h1>
      
      <BlogCard />
      
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default BlogSection;
