// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrx0Sm66Ml1rU_UU4kxs9V7AQW5czubHE",
  authDomain: "fir-auth-1132-d1499.firebaseapp.com",
  projectId: "fir-auth-1132-d1499",
  storageBucket: "fir-auth-1132-d1499.appspot.com",
  messagingSenderId: "780772637334",
  appId: "1:780772637334:web:2f15c9871ab14e57c1a0b7",
  measurementId: "G-TFMEW3V9DW"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth with your app instance
export { app, auth };