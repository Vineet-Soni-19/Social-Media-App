import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [username, setUsername] = useState("");
  const [data, setData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

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

    const { email, fullname, username, password } = data;
    console.log(data);
    try {
      if (email && fullname && username && password) {
        const fetchData = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const dataRes = await fetchData.json();
        // console.log(dataRes);

        alert(dataRes.message);
        // toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/");
        }
      } else {
        alert("Please enter required fields");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className=" m-10 w-full flex justify-center">
      <div className=" w-[350px] text-center">
        <div className="border border-black-2 py-10 px-6 flex flex-col">
          <h1 className=" text-4xl m-2">Takebook</h1>
          <p>Sign up to see photos and videos from your friends</p>
          <button className="mt-6 flex items-center justify-center bg-blue-400 text-white p-1 rounded-lg">
            <img src="facebooklogo.png" alt="" className="h-6" />
            <span className="ml-2">Log in with Facebook</span>
          </button>

          <form className="w-full flex flex-col" onSubmit={submit}>
            <input
              type={"email"}
              name="email"
              placeholder="Email"
              className="mt-8 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"
              value={data.email}
              onChange={handleOnChange}
            />
            <input
              type={"text"}
              name="fullname"
              placeholder="Full Name"
              className="mt-2 border border-black-1 p-2 bg-slate-100 placeholder:text-black placeholder:text-sm"
              value={data.fullname}
              onChange={handleOnChange}
            />
            <input
              type={"text"}
              name="username"
              placeholder="Username"
              className="mt-2 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"
              value={data.username}
              onChange={handleOnChange}
            />
            <input
              type={"password"}
              name="password"
              placeholder="Password"
              className="mt-2 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"
              value={data.password}
              onChange={handleOnChange}
            />
            <p className="mt-6 text-xs text-gray-700 ">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <span className="text-blue-800 font-medium">Learn More</span>
            </p>
            <p className="mt-6 text-xs text-gray-700">
              By signing up, you agree to our{" "}
              <span className="text-blue-800 font-medium">
                Terms, Privacy Policy{" "}
                <span className="font-normal text-gray-700">and </span>Cookies
                Policy.
              </span>
            </p>
            <button
              className="text-white bg-blue-400 p-1 mt-4 rounded-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="border border-black-1 p-6 mt-2">
          <p>
            Have an account?
            <Link to="/" className="text-blue-400">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
