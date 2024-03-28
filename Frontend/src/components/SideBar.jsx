import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { logoutRedux } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const dispatch=useDispatch();
  const handleLogout=()=>{
    dispatch(logoutRedux());
  }
  return (
    <>
      <div className=" h-[100vh] w-full border border-r-1">
        <h2 className="mt-10 mb-12 ml-8 text-3xl font-semibold ">
          <span className="block md:hidden">T</span>
          <span className="hidden md:block">Takebook</span>
        </h2>
        <ul className=" ml-8">
          <Link to={"home"}>
            <li className="mt-3 flex items-center gap-1 text-lg">
              <MdHomeFilled className="text-2xl" />
              <p className="hidden md:block">Home</p>
            </li>
          </Link>
          <Link to={"newpost"}>
            <li className="mt-5 flex items-center gap-1 text-lg">
              <CiSquarePlus className="text-2xl" />
              <p className="hidden md:block">New Post</p>
            </li>
          </Link>
          <Link to={"profile"}>
            <li className="mt-5 flex items-center gap-1 text-lg">
              <CgProfile className="text-2xl" />
              <p className="hidden md:block">Profile</p>
            </li>
          </Link>
          <Link to={"/"}>
            <li className="mt-5 flex items-center gap-1 text-lg">
              <IoIosLogOut className="text-2xl" />
              <p className="hidden md:block" onClick={handleLogout}>Log Out</p>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
