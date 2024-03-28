import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux, logoutRedux } from "../redux/userSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Profile = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="m-auto w-4/5 mr-1/2">
        <div className="mt-10 p-5 flex items-center justify-evenly">
          <div className=''>
            <div className="w-36 h-36 rounded-full border border-black overflow-hidden">
              {userData.image}
            </div>
          </div>
          <div className="mx-10 ">
            <div className="flex justify-between items-center  gap-5">
              <p className="text-lg font-medium">{userData.username}</p>
              <button className="py-1 px-3 bg-gray-200 rounded-lg font-medium">
                Edit profile
              </button>
              <IoMdSettings />
            </div>
            <div className="mt-3 flex items-center gap-5">
              <p>
                <span className="font-semibold">
                  {userData.posts ? userData.posts : "0"}
                </span>{" "}
                posts
              </p>
              <p>
                <span className="font-semibold">
                  {userData.followers ? userData.followers : "0"}
                </span>{" "}
                followers
              </p>
              <p>
                <span className="font-semibold">
                  {userData.following ? userData.following : "0"}
                </span>{" "}
                following
              </p>
            </div>
            <div className="mt-3">
              <h3 className="font-semibold text-lg">{userData.fullname}</h3>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
                Exercitationem repellendus quaerat delectus mollitia.
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-24"/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Profile;
