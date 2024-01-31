// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyASRfmRxbwMjOCHPrKMpbomi50IKv9g580",
  authDomain: "swd-longchim.firebaseapp.com",
  projectId: "swd-longchim",
  storageBucket: "swd-longchim.appspot.com",
  messagingSenderId: "70564732436",
  appId: "1:70564732436:web:2136ca6a5301d462505101",
  measurementId: "G-TD38EC0PJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);