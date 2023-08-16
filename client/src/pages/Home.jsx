import { useEffect, useState } from "react";

import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import axios from "../utils/axios";

import BlogList from "../components/Home/BlogList/BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  // Stores the category which the user selected
  const [searchKey, setSearchKey] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getArticle = async () => {
    try {
      const response = await axios.get("/article/get/all");

      setBlogs(response.data.articles);
    } catch (error) {
      return console.log(error);
    }
  };
  useEffect(() => {
    const checkStatus = async () => {
      try {
        await axios.get("/auth/user");

        return setIsLoggedIn(true);
      } catch (error) {
        return setIsLoggedIn(false);
      }
    };

    checkStatus();

    getArticle();
  }, [isLoggedIn]);

  const handleSignOut = async () => {
    try {
      await axios.delete("/auth/revoke_token");
      setIsLoggedIn(false)
    } catch (error) {
      console.log(error.message);
    }
  };

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const category = searchKey.trim();

    if (category == "All") {
      return getArticle();
    }

    const getArticleByCategory = async () => {
      try {
        const response = await axios.get("/article/get/category", {
          params: { category },
        });

        setBlogs(response.data.articles);
      } catch (error) {
        return console.log(error);
      }
    };

    getArticleByCategory();
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      <SearchBar
        value={searchKey}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.text)}
      />
      {!blogs ? <h1>Empty</h1> : <BlogList blogs={blogs} />}
    </>
  );
}

export default Home;
