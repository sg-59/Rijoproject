import { useEffect, useLayoutEffect, useState } from "react";
import { getUserDataApi } from "../api/user";
import { useSelector } from "react-redux";
import { authAxiosInstance } from "../api/axios";

import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState();

  const data = useSelector((store) => store.login.login);
  const id = data?.userID;


  const fetchData = async () => {
  
    try {
      const result = await authAxiosInstance.get(`/users/${id}`);
      console.log(result, "second check");
      // window.location.href = "/profile";
      setUser(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    

    fetchData();

  }, []);

  // useLayoutEffect(()=>{
  //   window.location.href = '/profile'
  // },[])



  console.log(user, "user");
  return (
    <>
      <h1>
        Welcome : {user?.firstName} {user?.lastName}
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        {/* image */}
        <img
          // src={`http://localhost:3000/images/${user?.image}`}
          src={user?.image}
          alt="profile"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid black",
            objectPosition: "top center",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>Username: {user?.userName} </h3>
          <h3>Age:{user?.age} </h3>
          <h3>Gender: {user?.gender}</h3>
          <h3>Email: {user?.email} </h3>
        </div>
      </div>
    </>
  );
};

export default Profile;
