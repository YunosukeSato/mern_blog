import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/rootReducer";
// import { key } from "../key";
import { blogList } from "../testData/data";

import BlogList from "../components/Home/BlogList/BlogList";

// const data = {
//   username: "",
//   jwt: "",
//   status: false,
// };


function UserPage() {
  // const userData = useSelector((state) => state.dataSlice);

  // const [newData, setNewData] = useState(data);
  // const [articles, setArticles] = useState([]);

  // const getCookie = (param) => {
  //   const cookies = document.cookie.split("; ");
  //   const cookieString = cookies.find((cookie) =>
  //     cookie.startsWith(`${param}=`)
  //   );
  //   return cookieString?.replace(`${param}=`, "");
  // };

  // useEffect(() => {
  //   const checkStatus = async () => {
  //     try {
  //       // Getting username and token from cookie
  //       const username = getCookie("username");
  //       const token = getCookie("token");

  //       // console.log(username, token);

  //       const response = await axios.post(
  //         "http://localhost:8000/user/check-status",
  //         { username, token }
  //       );

  //       if (response.status === 200) {
  //         return setNewData({
  //           username: response.data.username,
  //           jwt: response.data.token,
  //           status: true,
  //         });
  //       }

  //       setNewData(data);
  //     } catch (err) {
  //       setNewData(data);
  //     }
  //   };

  //   checkStatus();
  // }, [userData]);

  // useEffect(() => {
  //   const getArticles = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://node-blog-api.herokuapp.com/articles/get/all",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${key}`,
  //           }
  //         }
  //       );
  //       // console.log(response.data.articles[0]);
  //       setArticles(response.data.articles[0]);
  //       // console.log(articles);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getArticles();
  // }, []);
  return (
    <>
      <div className="card mx-10 my-10 flex flex-row justify-between w-auto bg-[#D2E9E9] text-gray-900 shadow-xl">
        <h1 className="m-10 text-3xl">Yunosuke Sato</h1>
        <Link to="/" className="m-10 text-xl text-teal-500 hover:text-emerald-600">Home</Link>
      </div>
      {!blogList.length ? <h1>Empty</h1> : <BlogList blogs={blogList} />}
    </>
  );
}

export default UserPage;