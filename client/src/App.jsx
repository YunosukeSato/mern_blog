import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" max-w-6xl w-11/12 my-0 mx-auto py-4 px-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
