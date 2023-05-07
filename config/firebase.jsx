// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmRzw_jRm3Ul_agq7aIO1O3VlSMwGDn04",
  authDomain: "kelarin-5abdf.firebaseapp.com",
  projectId: "kelarin-5abdf",
  storageBucket: "kelarin-5abdf.appspot.com",
  messagingSenderId: "136892440670",
  appId: "1:136892440670:web:675eea9109da020f4454cf",
  measurementId: "G-W9TGH8VV2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);