import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import WriteArticle from "./pages/WriteArticle";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className=" max-w-6xl w-11/12 my-0 mx-auto py-4 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/new-article" element={<WriteArticle />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
