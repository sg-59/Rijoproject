import { useState } from "react";
import { registerUserApi } from "../api/auth";

// cross origin resource sharing
const Register = () => {
  // const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    gender: "",
    image: "",
  });

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "file") {
      value = e.target.files[0];
    }
    setUserData({ ...userData, [name]: value });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUserApi(userData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Register</h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data" >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleOnChange}
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div className="gender-container">
                <label>
                  <input
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={handleOnChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={handleOnChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="other"
                    name="gender"
                    onChange={handleOnChange}
                  />
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="image">Profile</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleOnChange}
              />
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
