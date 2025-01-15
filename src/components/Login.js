import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name.current.value);

    const message = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value);
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    // Sign In / Sign Up Logic
    if (message === null) {
      // Sign In / Sign Up
    }


  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="relative flex-1">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg"
          alt="background-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <form
          onSubmit={(e) => e.preventDefault()}

          className="relative z-10 p-12 bg-black w-3/12 my-24 mx-auto text-white bg-opacity-80 rounded-md"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          {errorMessage && (
            <p className="text-red-500 mx-4">❌{" "}{errorMessage}</p>)
          }


          <button className="py-2 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4">
            {isSignInForm ? (
              <>
                New to Netflix?{" "}
                <span
                  className="hover:underline cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign up now.
                </span>
              </>
            ) : (
              <>
                Already Registered?{" "}
                <span
                  className="hover:underline cursor-pointer"
                  onClick={toggleSignInForm}
                >
                  Sign In now.
                </span>
              </>
            )}
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;