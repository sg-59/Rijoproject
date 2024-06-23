import axios from "axios";

const token =
  JSON.parse(JSON.parse(localStorage.getItem("persist:userDetails")).login) &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:userDetails")).login).token

// export const token = userDetails?.login && JSON.parse(userDetails.login)?.token ;

// console.log(userDetails, "userDetails")
console.log(token, "token")


export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const authAxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    token: token,
  },
});
