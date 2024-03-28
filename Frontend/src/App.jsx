import React from "react";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Post from "./components/Post";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Outlet from "./Customoutlet";
import Newpost from "./pages/Newpost";
import Customoutlet from "./Customoutlet";

const App = () => {
  return (
    <>
      <div className="flex">
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Customoutlet />}>
              <Route path="home" element={<Home/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="newpost" element={<Newpost/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
