import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
import { createContext } from "react";


const roles = {
  ADMIN : 0,
  USER : 1,
}

export const server = 'http://localhost:8001/api/v1';


export const Context = createContext({});

const AppWrapper = () => {
  
 
  const [auth, setAuth]= useState({})
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
      
        auth, setAuth
        // loading,
        // setLoading,
     
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
