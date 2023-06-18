import { useEffect, useState } from "react";

import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import axios from "../utils/axios";

import { blogList } from "../testData/data";
import BlogList from "../components/Home/BlogList/BlogList";
import { useNavigate } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

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
  });

  const handleSignOut = async () => {
    try {
      await axios.delete("/auth/revoke_token");
      navigate("/");
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
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      <SearchBar
        value={searchKey}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.text)}
      />
      {!blogs.length ? <h1>Empty</h1> : <BlogList blogs={blogs} />}
    </>
  );
}

export default Home;
