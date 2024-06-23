import { toast } from "react-toastify";
import { login } from "../redux/loginSlice";
import { axiosInstance } from "./axios";
import axios from "axios";

export const registerUserApi = async (userData) => {
  try {
    const data = await axios.post("http://localhost:3000/register", userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success(data.data.message);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const loginUserApi = async (userData, dispatch, navigate) => {
  try {
    const response = await axiosInstance.post("/login", userData);
    dispatch(login(response.data));
window.location.reload()
    // dispatch
     toast.success(response.data.message);
  } catch (err) {
    toast.error(err.response.data.message);
    console.log(err, "error from login");
  }
};
