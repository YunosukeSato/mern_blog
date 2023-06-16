/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import image1 from "../../../assets/ER_bg_1.jpg";
import image2 from "../../../assets/ER_bg_2.jpeg";
import Category from "../../common/Category";

function BlogItem({
  blog: {
    id,
    title,
    description,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
  },
}) {
  return (
    <div className="flex flex-col">
      <img
        className=" w-full h-56 object-cover rounded-3xl mb-2"
        src={cover == "" ? image1 : cover}
        alt=""
      />
      <Category label={category} />
      <h3 className=" mt-2 mr-0 mb-4 ml-0 flex-1">{title}</h3>
      <p className=" relative max-h-14 overflow-hidden pr-2 text-sm text-[#a9a9a9]">
        <span className="absolute bottom-0 right-0">...</span>
        {description}
      </p>
      <footer className="flex items-center mt-4 justify-between">
        <div className="flex items-center">
          <img
            className=" w-10 h-10 rounded-full object-cover mr-2"
            src={authorAvatar == "" ? image2 : authorAvatar}
            alt=""
          />
          <div>
            <h6>{authorName}</h6>
            <p className=" text-xs text-[#a9a9a9] font-semibold">{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
}

export default BlogItem;
