import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../testData/data";
import Category from "../components/common/Category";
import EmptyList from "../components/common/EmptyList";
import { Link } from "react-router-dom";

import defaultCover from "../assets/ER_bg_1.jpg";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link
        className="no-underline text-sm text-[#a9a9a9] font-medium mb-8 block"
        to="/"
      >
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className=" max-w-2xl my-0 mx-auto">
          <header className=" text-center">
            <p className=" text-sm text-[#a9a9a9] font-medium">
              Published {blog.createdAt}
            </p>
            <h1>{blog.title}</h1>
            <div className="flex justify-center">
              <div className=" m-4" key={id}>
                <Category label={blog.category} />
              </div>
            </div>
          </header>
          <img
            className="w-full"
            src={blog.cover == "" ? defaultCover : blog.cover}
            alt="cover"
          />
          <p className="p-4 mt-6">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
