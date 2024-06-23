import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../redux/loginSlice";
import { useState } from "react";

const Header = () => {
  const [test, setTest] = useState(false);
  const dispatch = useDispatch();
  const success = useSelector((store) => store.login?.login?.success);
  const userLogout = () => {
    dispatch(logout());
    // window.location.reload();
    setTest(!test);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            {success && (
              <>
                <li>
                  <Link onClick={userLogout}>Logout</Link>
                </li>
              </>
            )}
            {!success && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
