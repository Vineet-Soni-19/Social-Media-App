import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  let [postData, setPostData] = useState([]);

  const userId = useSelector((state) => state.user._id);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/home", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const resData = await response.json();
      setPostData(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();

  const userPost = postData.filter((el) => el.userId === userId);

  return (
    <div>
      {/* <Post key={userPost._id}/> */}
    </div>
  );
};

export default Home;
