import React from "react";

const SignUp = () => {
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
          <input
            type="email"
            placeholder="Email"
            className="mt-8 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"
          />
          <input type="text" placeholder="Full Name" className="mt-2 border border-black-1 p-2 bg-slate-100 placeholder:text-black placeholder:text-sm"/>
          <input type="text" placeholder="Username" className="mt-2 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"/>
          <input
            type="password"
            placeholder="Password"
            className="mt-2 border border-black-1 p-2 bg-slate-100  placeholder:text-black placeholder:text-sm"
          />
          <p className="mt-6 text-xs text-gray-700 ">People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-800 font-medium">Learn More</span></p>
          <p className="mt-6 text-xs text-gray-700">By signing up, you agree to our <span className="text-blue-800 font-medium">Terms, Privacy Policy <span className="font-normal text-gray-700">and </span>Cookies Policy.</span></p>
          <button className="text-white bg-blue-400 p-1 mt-4 rounded-lg">
            Sign Up
          </button>
        </div>
        <div className="border border-black-1 p-6 mt-2">
          <p>
            Have an account? <a className="text-blue-400">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
