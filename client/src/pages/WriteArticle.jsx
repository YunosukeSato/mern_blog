import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { useAuthContext } from "../context/AuthContext";

function WriteArticle() {
  // Modules which the user can use in the WriteArticle page
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const [title, setTitle] = useState("");
  // const [cover, setCover] = useState();
  const [body, setBody] = useState("Hello! Write a new article here!");
  const [category, setCategory] = useState("");
  const user = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user == undefined) {
      navigate("/");
    }
  });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.text);
  };

  // const handleFileUpload = (e) => {
  //   // console.log(e.target.files[0]);
  //   const file = e.target.files[0];
  //   // console.log(formData);
  //   setCover(file);
  // };

  const handleProcedureContentChange = (content) => {
    setBody(content);
  };

  const handleSubmit = async () => {
    const userid = user.user.userid;
    const author = user.user.username;
    // Todo: Enable to set the cover image
    // if (author && title && cover && body && category) {
    if (author && title && body && category) {
      try {
        console.log("sending a request");
        const response = await axios.post(
          "/article/save",
          {
            userid,
            author,
            title,
            // cover,
            body,
            category,
          },
          {
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${key}`,
            },
          }
        );

        if (response.status === 201) {
          return navigate("/");
        }
      } catch (err) {
        return console.log(err);
      }
    }
    console.error("Something went wrong");
  };

  return (
    <>
      <div className="mx-6 p-4 text-gray-900">
        <label htmlFor="title" className=" block font-medium">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="w-full rounded-md border px-4 py-2"
          value={title}
          onChange={handleTitleChange}
        />
        {/* implement image upload later */}
        {/* <input className="mt-4" type="file" onChange={handleFileUpload} /> */}
      </div>
      <div className="mx-10 text-gray-900">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={body}
          onChange={handleProcedureContentChange}
          // onChange={handleProcedureContentChange as ReactQuillProps["onChange"]}
        />
        <div className="mr-5 mt-5 flex justify-end">
          <CDropdown>
            <CDropdownToggle color="secondary">
              {category == "" ? "Category" : category}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={handleChangeCategory}>Game</CDropdownItem>
              <CDropdownItem onClick={handleChangeCategory}>
                Shoping
              </CDropdownItem>
              <CDropdownItem onClick={handleChangeCategory}>
                Travel
              </CDropdownItem>
              <CDropdownItem onClick={handleChangeCategory}>
                Development
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <button
            className={
              "ease m-1 rounded px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:shadow-md focus:outline bg-[#0080ff] hover:bg-[#0f52ba] disabled:bg-gray-300 disabled:cursor-not-allowed"
            }
            onClick={handleSubmit}
            disabled={title == "" || body == "" || category == ""}
          >
            Submit
          </button>
          <Link
            to="/"
            className={`mx-4 flex items-center text-[#0080ff] hover:text-[#0f52ba] `}
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default WriteArticle;
