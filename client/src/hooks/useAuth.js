import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../utils/axios";

// Context for the authentication
function useAuth() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // Sign up function which return user info and redirect to the main page
  const signup = async (data) => {
    try {
      await axios.post("/auth/signup", data);
      await getUser();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      return error;
    }
  };

  // Log in function which return user info and redirect to the main page
  const login = async (data) => {
    try {
      await axios.post("/auth/login", data);
      await getUser();
      navigate("/");
    } catch (error) {
      return error.response.status;
    }
  };

  // Function to simply get the user info
  const getUser = async () => {
    try {
      const response = await axios.get("/auth/user");
      const userinfo = response.data.user;
      setUser(userinfo);
    } catch (error) {
      console.log(error);
    }
  };

  return { user, signup, login };
}

export default useAuth;
