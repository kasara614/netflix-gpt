// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6SJ_rGYLgNzK3qz7pVNOAPes5ZPSLTUw",
  authDomain: "netflixgpt-c715e.firebaseapp.com",
  projectId: "netflixgpt-c715e",
  storageBucket: "netflixgpt-c715e.firebasestorage.app",
  messagingSenderId: "420451498911",
  appId: "1:420451498911:web:5d8b7e8b47ca9699f3dbaa",
  measurementId: "G-DJRXCVBKFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();