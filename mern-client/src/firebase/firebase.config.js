// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF4NC1rk7i7zzpaoeFKG82Ch5VBgdsgPA",
  authDomain: "mern-book-website.firebaseapp.com",
  projectId: "mern-book-website",
  storageBucket: "mern-book-website.appspot.com",
  messagingSenderId: "1008018694921",
  appId: "1:1008018694921:web:15e3b01f96caf1e8d369d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;