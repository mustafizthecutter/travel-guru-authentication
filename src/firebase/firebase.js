// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-KbEDdIbrLrd_5ESjqpKyC3PIzUDrgSE",
  authDomain: "travel-guru-mania.firebaseapp.com",
  projectId: "travel-guru-mania",
  storageBucket: "travel-guru-mania.appspot.com",
  messagingSenderId: "944928033913",
  appId: "1:944928033913:web:00e20f396b591be27418a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;