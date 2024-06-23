 import axios from "axios";
import { authAxiosInstance } from "./axios";






export const getUserDataApi = async (userID) => {
  try {
    const response = await authAxiosInstance.get(`/users/${userID}`);
    console.log(response, "first check");
      return response.data;
  } catch (err) {
    console.log(err);
  }
};










export const deleteUserApi = async (userID) => {
  try {
    const response = await authAxiosInstance.delete(`/users/${userID}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserApi = async (userID, userData, navigate) => {
  const response = await authAxiosInstance.put(`/users/${userID}`, userData);
  console.log(userData, "userData from update after tryk api");

  navigate("/profile");
  console.log(response, "response form api");
  return response.data;
};
