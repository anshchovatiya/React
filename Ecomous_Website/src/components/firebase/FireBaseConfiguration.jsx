// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG_XUUE4MTGg1x08IRBaOmQf65o1snOLE",
  authDomain: "fir-practice-7b85b.firebaseapp.com",
  projectId: "fir-practice-7b85b",
  storageBucket: "fir-practice-7b85b.appspot.com",
  messagingSenderId: "534266815065",
  appId: "1:534266815065:web:4b79a758d3b1fd5c308748",
  measurementId: "G-3V01CLPLTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);