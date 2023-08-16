import { Link } from "react-router-dom";
import axios from "../utils/axios";
import { useState, useEffect } from "react";

import BlogList from "../components/Home/BlogList/BlogList";
import { useAuthContext } from "../context/AuthContext";

function UserPage() {
  const [articles, setArticles] = useState([]);
  // The user information from the context
  const user = useAuthContext();

  useEffect(() => {
    const userid = user.user.userid;
    const getArticle = async () => {
      const response = await axios.get("/article/get/author", {
        params: { userid },
      });

      if (response.data.articles.length == 0) {
        return setArticles([]);
      }

      return setArticles(response.data.articles);
    };
    getArticle();
  }, [user.user.userid]);

  return (
    <>
      <div className="card mx-10 my-10 flex flex-row justify-between w-auto bg-[#D2E9E9] text-gray-900 shadow-xl">
        <h1 className="m-10 text-3xl">{user.user.username}</h1>
        <Link
          to="/"
          className="m-10 text-xl text-[#0080ff] hover:text-[#0f52ba]"
        >
          Home
        </Link>
      </div>
      {articles.length == 0 ? (
        <h2 className="flex items-center justify-center">Articles not found</h2>
      ) : (
        <>
          <BlogList blogs={articles} />
        </>
      )}
    </>
  );
}

export default UserPage;
