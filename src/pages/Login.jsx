import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context, server } from "../main";

const Login = () => {
 
  const {auth, setAuth} = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data.usertoken)
      console.log(data.role)
      const role = data.role
      const token = data.usertoken
      setAuth({role, token})
     
      toast.success(data.message);
      // setIsLoggedIn(data.usertoken)
      // Navigate('/')
      // navigate('/')
      
      // setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      // setLoading(false);
      // setIsLoggedIn('')
      setAuth({})
    }
  };
  // console.log('auth:' , auth)
  if (auth?.token) return <Navigate to={"/"} />;

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            Login
          </button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
