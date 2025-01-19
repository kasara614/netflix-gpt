import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGIN, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

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
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value, photoURL: USER_AVATAR
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          if (errorCode) return setErrorMessage("Please Check Your Email or Password not Valid");

        });
    };


  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="relative flex-1">
        <img
          src={BG_LOGIN}
          alt="background-img"
          className="absolute inset-0 w-full h-screen object-cover"
        />
        <form
          onSubmit={(e) => e.preventDefault()}

          className="relative z-10 p-6 md:p-12 bg-black w-11/12 md:w-3/12 my-24 mx-auto text-white bg-opacity-80 rounded-md"
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