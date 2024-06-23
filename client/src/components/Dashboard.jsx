import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/loginSlice";
import { getUserDataApi, deleteUserApi } from "../api/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AlertPopup from "./AlertPopup";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID = useSelector((state) => state.login?.login?.userID);

  const deleteUser = async () => {
    await deleteUserApi(userID);
    toast.success("User deleted successfully");
    dispatch(logout());
  };
  const showAlert = () => {
    setShow(true);
  };




 
  return (
    <div className="dashboard">
      {show ? (
        <AlertPopup
          setShow={setShow}
          deleteUser={deleteUser}
          message="Are you sure you want to delete your account?"
        />
      ) : null}

      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar">
          <ul>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="newprofile">new Profile</Link>
            </li>
            <li>
              <Link to="update">Update</Link>
            </li>
            <li onClick={showAlert}>Delete</li>
          </ul>
        </div>
        <div className="dashboard-content">
         <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
