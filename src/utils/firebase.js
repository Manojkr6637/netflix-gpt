// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration D:\Manoj\course\namaste-react\netflix-gpt\src\utils\firebase.js
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8KHRG2TYw20XZX-TmUC5PaLJkI0p521I",
  authDomain: "netflixgpt-12a4e.firebaseapp.com",
  projectId: "netflixgpt-12a4e",
  storageBucket: "netflixgpt-12a4e.appspot.com",
  messagingSenderId: "366290301530",
  appId: "1:366290301530:web:bbb042154f2e15475e1e63",
  measurementId: "G-PZMPGVKS08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()