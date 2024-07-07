import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { loading} = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <p>hello</p>
      {/* <h1>{user?.name}</h1> */}
      {/* <p>{user?.email}</p>/ */}
    </div>
  );
};

export default Profile;
