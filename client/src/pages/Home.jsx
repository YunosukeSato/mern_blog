import { useState } from "react";

import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";

import { blogList } from "../testData/data";

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

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("All");
  };

  return (
    <>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
    </>
  );
}

export default Home;
