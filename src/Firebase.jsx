import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfnx6fA2W9DHb1w_5JCrNh5vbQw8wQ3d0",
  authDomain: "nardin-fs18.firebaseapp.com",
  projectId: "nardin-fs18",
  storageBucket: "nardin-fs18.appspot.com",
  messagingSenderId: "89759825555",
  appId: "1:89759825555:web:692890658441c93c0dd766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);