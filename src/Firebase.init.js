// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3YFkqEPrAz9tV-_bpVAyXrB9MTjQwCMk",
  authDomain: "wholesome-tech.firebaseapp.com",
  projectId: "wholesome-tech",
  storageBucket: "wholesome-tech.appspot.com",
  messagingSenderId: "847773123213",
  appId: "1:847773123213:web:869b8d080fcb736c8d58c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
