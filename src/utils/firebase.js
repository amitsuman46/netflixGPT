// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGweq1gVL-GTeSTB7B37QPtOeHsFC-Qxc",
  authDomain: "netflixgpt-907c5.firebaseapp.com",
  projectId: "netflixgpt-907c5",
  storageBucket: "netflixgpt-907c5.appspot.com",
  messagingSenderId: "453209815731",
  appId: "1:453209815731:web:840ceea193584f23948ec6",
  measurementId: "G-6YSQ515WJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();