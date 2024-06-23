import { useState } from "react";
import "../pages/style.css";
import { toast } from "react-toastify";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentButtonText, setCurrentButtonText] = useState("");
  const [userId, setUserId] = useState("");

  const fetchAllUsers = (buttonText) => async () => {
    setCurrentButtonText(buttonText);
    try {
      const response = await fetch("http://localhost:3000/users");
      const { msg, users } = await response.json();
      setUsers(users);
      toast.success(msg);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUserById = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const user = await response.json();
      setUsers(user);
      toast.success("User fetched successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main>
      <div className="bg-image"></div>
      <div className="content">
        <button>Get Started</button>
      </div>
    </main>
  );
};

export default Home;
