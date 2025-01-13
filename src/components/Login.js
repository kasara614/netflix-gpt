import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg" alt="background-img" />
      </div>
      <form action="" className="absolute p-12 bg-black w-3/12 my-24 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />}

        <input type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />

        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />

        <button className="py-2 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="py-4">
          {isSignInForm ? (<> New to Netflix? {" "} <span className="hover:underline cursor-pointer" onClick={toggleSignInForm}>Sign up now.</span> </>) : (<>Already Registered? {" "} <span className="hover:underline cursor-pointer" onClick={toggleSignInForm}>Sign In now.</span></>)}
        </p>
      </form>
    </div >
  );
};

export default Login;