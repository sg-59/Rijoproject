const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
// routes
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");

// middleware 
const app = express();
app.use(express.json());

app.use(cors());
 

app.use("/images", express.static(path.join(__dirname, "/uploads")));
  
app.use("/", authRouter);
app.use("/users", userRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// https://medium.com/@arunchaitanya/wtf-is-bearer-token-an-in-depth-explanation-60695b581928

// const authAxiosInstance = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     Authorization: `Bearer ${getAuthToken()}`,
//   },
// });
