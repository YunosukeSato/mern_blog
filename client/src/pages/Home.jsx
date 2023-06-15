import { useState } from "react";

import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";

import { blogList } from "../testData/data";
import BlogList from "../components/Home/BlogList/BlogList";

function Home() {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("All");

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
      <Header />
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
