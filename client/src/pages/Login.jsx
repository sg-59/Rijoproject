import { useState } from "react";

import "./style.css";
import { loginUserApi } from "../api/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserApi(userData, dispatch, navigate);

  };
  return (
    <>
      <div className="container">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
        
    </>
  );
};

export default Login;
