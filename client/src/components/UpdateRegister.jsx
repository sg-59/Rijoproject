import { useSelector } from "react-redux";
import { getUserDataApi, updateUserApi } from "../api/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateRegister = () => {
  const [userDetails, setUserDetails] = useState({}); // user details from api
  const [userData, setUserData] = useState({
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    age:String,
    password:String,
    confirmPassword:String,
    gender:String,
  });

  const data = useSelector((store) => store.login?.login);
  const navigate = useNavigate();
  const userID = data?.userID;

  useEffect(() => {
    getUserDataApi(userID).then((data) => {
      setUserDetails(data);
      setUserData({...userData,['gender']:data.gender})
    });
  }, []);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
 
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log("userdetails values***********************",userData);
      const result = await updateUserApi(userID, userData, navigate);
      toast.success(result.message);
    } catch (err) {
      toast.success(err?.response?.data?.message || err);
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleOnChange}
                placeholder={userDetails?.firstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleOnChange}
                placeholder={userDetails?.lastName}
               
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={handleOnChange}
                placeholder={userDetails?.userName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleOnChange}
                placeholder={userDetails?.email}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={handleOnChange}
                placeholder={userDetails?.age}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div className="gender-container">
                <label>
                  <input
                    id="male"
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={handleOnChange}
                    checked={userData&&userData.gender == "male"}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    id="female"
                    onChange={handleOnChange}
                    checked={userData&&userData.gender == "female"}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="other"
                    name="gender"
                    id="other"
                    onChange={handleOnChange}
                    checked={userData&&userData.gender == "other"}
                  />
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleOnChange}
                placeholder="Enter new password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleOnChange}
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRegister;
