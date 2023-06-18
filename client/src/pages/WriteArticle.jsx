import { useState } from "react";
import ReactQuill from "react-quill";
// import ReactQuill, { ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { key } from "../key"
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

function WriteArticle() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      // ["link", "image"],
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
  const [code, setCode] = useState("Hello! Write a new article here!");
  const [category, setCategory] = useState("");
  // const navigate = useNavigate();

  const handleChangeCategory = (e) => {
    setCategory(e.target.text);
    // console.log(e.target.text);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image", file)
    console.log(formData);
  }

  const handleProcedureContentChange = (content) => {
    setCode(content);
  };

  // const handleSetTheme = (e) => {
  //   e.preventDefault();
  //   const selectedTheme = e.currentTarget.textContent;
  //   if (selectedTheme) {
  //     setTheme(selectedTheme);
  //   }
  //   setDropdownOpen(false);
  // };

  // const toggleDropdown = () => {
  //   setDropdownOpen((prevState) => !prevState);
  // };

  // const handleOutsideClick = (e) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //     setDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  // const getCookie = (param) => {
  //   const cookies = document.cookie.split("; ");
  //   const cookieString = cookies.find((cookie) =>
  //     cookie.startsWith(`${param}=`)
  //   );
  //   return cookieString?.replace(`${param}=`, "");
  // };

  // const handleSubmit = async () => {
  //   const author = getCookie("username");

  //   if (author && title && code && theme) {
  //     try {
  //       const response = await axios.post(
  //         "https://node-blog-api.herokuapp.com/articles/save",
  //         {
  //           author,
  //           title,
  //           code,
  //           theme,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${key}`,
  //           }
  //         }
  //       );

  //       if (response.status === 200) {
  //         return navigate("/");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }

  //     console.error("Something went wrong");
  //   }
  // };

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
        <input className="mt-4" type="file" onChange={handleFileUpload}/>
      </div>
      <div className="mx-10 text-gray-900">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={code}
          onChange={handleProcedureContentChange}
          // onChange={handleProcedureContentChange as ReactQuillProps["onChange"]}
        />
        <div className="mr-5 mt-5 flex justify-end">
          <CDropdown>
            <CDropdownToggle color="secondary">
              {category == "" ? "Category" : category}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={handleChangeCategory}>
                Development
              </CDropdownItem>
              <CDropdownItem onClick={handleChangeCategory}>
                Shoping
              </CDropdownItem>
              <CDropdownItem onClick={handleChangeCategory}>
                Travel
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <button
            className={"ease m-1 rounded px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:shadow-md focus:outline bg-[#0080ff] hover:bg-[#0f52ba] disabled:bg-gray-300 disabled:cursor-not-allowed"}
            // onClick={handleSubmit}
            disabled={title == "" || code == "" || category == ""}
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
