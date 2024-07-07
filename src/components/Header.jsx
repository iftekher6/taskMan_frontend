import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context, server } from "../main";

const Header = () => {
  
const {auth,setAuth} = useContext(Context)
  const logoutHandler = async () => {
  ;
    try {
     const {data} =  await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      // console.log(data)
     
        setAuth({})     
      
   
    } catch (error) {
      toast.error(error);
    
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>taskPilot</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {auth?.token ? (
          <button onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
