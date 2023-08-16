import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

function SignUp() {
    // Stores the username and password that the user typed
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(false);
    // signup method from the context
  const { signup } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username == "" || password == "") {
      return setError(true);
    }

    signup({
      username,
      password,
      profilePic: "",
    });
  };

  return (
    <div className="absolute flex h-[100vh] w-[100vw] items-center justify-center px-3 sm:px-5">
      <div className="z-50 w-full rounded-lg bg-[#EAFDFC] bg-clip-padding px-6 py-4 text-gray-900 backdrop-blur-sm backdrop-filter sm:w-1/2 lg:w-2/3">
        {error && (
          <div className="flex justify-center">
            <h3 className="text-red-500">Invalid username or password</h3>
          </div>
        )}
        <div className="mb-2 flex w-full justify-center text-xl md:mb-5">
          Sign Up
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="mb-2 block text-xs font-medium text-gray-500"
            >
              Your username
            </label>
            <input
              type="username"
              className="block w-full rounded-lg border border-gray-300 bg-[#F8F6F4] text-xs text-gray-900 focus:border-[#0080ff] focus:ring-[#0080ff] md:p-2.5"
              placeholder="username here"
              ref={usernameRef}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-xs font-medium text-gray-500"
            >
              Your password
            </label>
            <input
              type="password"
              className="block w-full rounded-lg border border-gray-300 bg-[#F8F6F4] text-xs text-gray-900 focus:border-[#0080ff] focus:ring-[#0080ff] md:p-2.5"
              placeholder="password here"
              ref={passwordRef}
            />
          </div>
          <button
            className="mt-4 flex w-full justify-center rounded-md bg-[#0080ff] py-2 text-sm text-white shadow hover:bg-[#0f52ba] hover:shadow-md md:mt-5 md:text-xl"
            type="submit"
          >
            Sign Up
          </button>
          <Link
            to="/"
            className={`justify-center mt-2 flex items-center text-[#0080ff] hover:text-[#0f52ba] `}
          >
            Home
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
