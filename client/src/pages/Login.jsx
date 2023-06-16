// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { authorize } from "../redux/dataSlice";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { key } from "../key";

// const data = {
//   username: "",
//   jwt: "",
//   status: false,
// };

function Login() {
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");
  // const [newData, setNewData] = useState(data);
  // const [error, setError] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleUsernameChange = (e) => {
  //   e.preventDefault();
  //   setUser(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  // };

  // const handleLogin = async () => {
  //   if (user && password) {
  //     try {
  //       const response = await axios.post("https://node-blog-api.herokuapp.com/user/login", {
  //         user,
  //         password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${key}`,
  //         }
  //       }

  //       );

  //       if (response.status === 200) {

  //         const { username, token } = response.data;

  //         setNewData({ username: username, jwt: token, status: true });

  //         const expirationDate = new Date();
  //         expirationDate.setDate(expirationDate.getDate() + 2);

  //         document.cookie = `username=${username}; path=/; expires=${expirationDate}; Secure; SameSite=None;`;
  //         document.cookie = `token=${token}; path=/; expires=${expirationDate}; Secure; SameSite=None;`;

  //         return;
  //       }

  //       setError(true);
  //     } catch (err) {
  //       setError(true);
  //     }
  //   } else {
  //     setError(true);
  //   }
  // };

  // useEffect(() => {

  //   if (newData.status) {
  //     dispatch(authorize(newData));
  //     return navigate("/");
  //   }
  // }, [dispatch, newData, navigate]);
  return (
    <div className="absolute flex h-[100vh] w-[100vw] items-center justify-center px-3 sm:px-5">
      <div className="z-50 w-full rounded-lg bg-[#EAFDFC] bg-clip-padding px-6 py-4 text-gray-900 backdrop-blur-sm backdrop-filter sm:w-1/2 lg:w-2/3">
        {/* {error && (
          <div className="flex justify-center">
            <h3 className="text-red-500">Invalid username or password</h3>
          </div>
        )} */}
        <div className="mb-2 flex w-full justify-center text-xl md:mb-5">
          Login
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium text-gray-500"
          >
            Your username
          </label>
          <input
            type="email"
            className="block w-full rounded-lg border border-gray-300 bg-[#F8F6F4] text-xs text-gray-900 focus:border-[#0080ff] focus:ring-[#0080ff] md:p-2.5"
            placeholder="Username here"
            required
            // onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-xs font-medium text-gray-500"
          >
            Your password
          </label>
          {/* bg-[#0080ff] no-underline px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:bg-[#0f52ba] focus:outline-none active:bg-[#0f52ba]" */}
          <input
            type="password"
            className="block w-full rounded-lg border border-gray-300 bg-[#F8F6F4] text-xs text-gray-900 focus:border-[#0080ff] focus:ring-[#0080ff] md:p-2.5"
            required
            // onChange={handlePasswordChange}
          />
        </div>
        <div className="flex flex-row-reverse">
          <Link to="/sign-up" className="md:text-md text-sm text-[#0080ff]">
            Sign in
          </Link>
        </div>
        <button
          className="mt-4 flex w-full justify-center rounded-md bg-[#0080ff] py-2 text-sm text-white shadow hover:bg-[#0f52ba] hover:shadow-md md:mt-5 md:text-xl"
          // onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
