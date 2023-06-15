/* eslint-disable react/prop-types */

import BlogItem from "./BlogItem";

function BlogList({ blogs }) {
  return (
    <div className="grid grid-cols-3 gap-12">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
