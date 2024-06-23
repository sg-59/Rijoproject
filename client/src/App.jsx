import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
 import Profile from "./components/Profile";
import UpdateRegister from "./components/UpdateRegister";
import { useEffect } from "react";
import Newprofile from "./components/Newprofile";

const App = () => {
  // const [success, setSuccess] = useState(false);
  const userData = useSelector((store) => store.login.login);

  const success = userData?.success;


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <>
    
            <Route path=""  element={ success ? <Dashboard /> : <Login/>}>
              <Route path="/profile"  element={success ? <Profile /> : <Login/>} />
              <Route path="/update" element={success ? <UpdateRegister /> : <Login/>} />
              <Route path="/newprofile" element={success ? <Newprofile /> : <Login/>} />
            </Route>
   

          {/* <Route path="Home" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="" element={<Login />} />
        </>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
