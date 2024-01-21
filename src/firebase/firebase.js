// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCns7rOjIndwUzYrsZX5st-JuZbOcfDx-g",
    authDomain: "travel-guru-authenticati-90af8.firebaseapp.com",
    projectId: "travel-guru-authenticati-90af8",
    storageBucket: "travel-guru-authenticati-90af8.appspot.com",
    messagingSenderId: "187824216945",
    appId: "1:187824216945:web:52f53ec4b2a3bf166ef4d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;