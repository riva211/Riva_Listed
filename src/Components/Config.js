// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwiV8A7It_VGAr0O1OhRUkr7-kZ5P2Fs4",
  authDomain: "listed-5dffb.firebaseapp.com",
  projectId: "listed-5dffb",
  storageBucket: "listed-5dffb.appspot.com",
  messagingSenderId: "61360253189",
  appId: "1:61360253189:web:b918959900439f82ceef6c",
  measurementId: "G-0YEBP93YG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


export {auth,provider};