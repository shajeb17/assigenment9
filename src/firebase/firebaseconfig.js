// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuKD8emgWxKp4uK7i1gWvVRkMQiKXnggE",
  authDomain: "assigenment9.firebaseapp.com",
  projectId: "assigenment9",
  storageBucket: "assigenment9.firebasestorage.app",
  messagingSenderId: "940044179958",
  appId: "1:940044179958:web:b15844f11cd0d62eb6cfd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);