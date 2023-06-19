import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Category from "../components/common/Category";
import EmptyList from "../components/common/EmptyList";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

import axios from "../utils/axios";
import defaultCover from "../assets/ER_bg_1.jpg";

function sanitizeHTML(html) {
  const sanitizedHTML = DOMPurify.sanitize(html);
  return { __html: sanitizedHTML };
}

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get("/article/get/id", { params: { id } });

      if (response.data.article == []) {
        return console.log("Article not found");
      }

      return setBlog(response.data.article[0]);
    };
    getArticle();
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
              Published {blog.created_at}
            </p>
            <h1>{blog.title}</h1>
            <div className="flex justify-center">
              <div className=" m-4" key={id}>
                <Category label={blog.category} />
              </div>
            </div>
          </header>
          <img className="w-full rounded-lg" src={defaultCover} alt="cover" />
          {/* <img
            className="w-full rounded-lg"
            src={blog.cover == "" ? defaultCover : blog.cover}
            alt="cover"
          /> */}
          {/* <p className="p-4 mt-6">{blog.body}</p> */}
          <div dangerouslySetInnerHTML={sanitizeHTML(blog.body)} />
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
