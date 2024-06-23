import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { authAxiosInstance } from '../api/axios';

const Newprofile = () => {

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

    console.log("User value in new profile page",user);

  return (
    <div>
      
    </div>
  )
}

export default Newprofile
