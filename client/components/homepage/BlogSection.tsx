import BlogCard from "../blogspage/BlogCard";

function BlogSection() {
  return (
    <div>
      <h1>Blogs</h1>
      <BlogCard />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default BlogSection;
