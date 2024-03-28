import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginRedux } from "../redux/userSlice";
import { useDispatch} from "react-redux";

const LogIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  async function submit(e) {
    e.preventDefault();

    try {
      const { email, password } = data;
      if (email && password) {
        const fetchData = await fetch(
          "http://localhost:3000/",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        console.log(dataRes);
        // toast(dataRes.message);

        if (dataRes.alert) {
          dispatch(loginRedux(dataRes))
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }

        // console.log(userData);
      } else {
        alert("Please enter required fields");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className=" m-10 w-full flex justify-center">
      <div className=" w-[350px] text-center">
        <div className="border border-black-2 py-10 px-6 flex flex-col">
          <h1 className=" text-4xl m-2">Takebook</h1>
          <form className="flex flex-col" onSubmit={submit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="mt-8 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"
              value={data.email}
              onChange={handleOnChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="mt-2 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"
              value={data.password}
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className="text-white bg-blue-400 p-1 mt-4 rounded-sm"
            >
              Log in
            </button>
          </form>
          <div className="mt-4 relative">
            <hr class="border-t border-gray-400 my-6" />
            <span class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white px-2 pt-3.5 text-gray-500 text-sm z-10">
              OR
            </span>
          </div>
          <div className="mt-6 flex items-center text-blue-600 justify-center">
            <img src="facebooklogo.png" alt="" className="h-6" />
            <span className="ml-2">Log in with Facebook</span>
          </div>
          <a className="mt-6 text-sm text-blue-900">Forgot password?</a>
        </div>
        <div className="border border-black-1 p-6 mt-2">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
