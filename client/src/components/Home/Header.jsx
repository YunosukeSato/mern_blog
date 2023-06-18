/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Header({ isLoggedIn, handleSignOut }) {
  return (
    <>
      <div className="pr-8 inline-flex justify-end h-full items-center lg:ml-0 w-full lg:justify-end">
        {!isLoggedIn && (
          <>
            <Link
              to="/login"
              className="mr-5 font-medium text-[#0080ff] hover:text-[#0f52ba] no-underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ease rounded bg-[#0080ff] no-underline px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:bg-[#0f52ba] focus:outline-none active:bg-[#0f52ba]"
            >
              SIGN UP
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <button
              onClick={handleSignOut}
              className="mr-5 font-medium text-[#0080ff] hover:text-[#0f52ba] no-underline"
            >
              Sign out
            </button>
            <Link
              to="/user_page"
              className="mr-5 text-[#0080ff] font-medium hover:text-[#0f52ba] no-underline"
            >
              User
            </Link>
            <Link
              to="/new_article"
              className="ease rounded bg-[#0080ff] no-underline px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:bg-[#0f52ba] focus:outline-none active:bg-[#0f52ba]"
            >
              New Article
            </Link>
          </>
        )}
      </div>
      <header className=" text-center">
        <h2 className=" text-[#0080ff] text-4xl">For everyone enjoying life</h2>
        <h1 className=" text-5xl text-[#0f52ba] mb-4">
          <span className=" text-[#b0c4de]">&quot;</span>Daily Blog
          <span className="text-[#b0c4de]">&quot;</span>
        </h1>
        <p className=" text-[#a9a9a9] font-medium">
          wonderful place to share your life and knowledge <br /> make oneself
          productive and entertained!
        </p>
      </header>
    </>
  );
}

export default Header;
