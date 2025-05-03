// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc_eVrKfrLEYOQg6PBJyFntkPkEqqjbCA",
  authDomain: "dragon-news-web-8fe20.firebaseapp.com",
  projectId: "dragon-news-web-8fe20",
  storageBucket: "dragon-news-web-8fe20.firebasestorage.app",
  messagingSenderId: "846190193062",
  appId: "1:846190193062:web:97d937f4ba9db93ad78767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);