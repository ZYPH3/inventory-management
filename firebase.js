// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpBvC2P9sG8g5QtWqZ-fdEmpVU3P6LYLg",
  authDomain: "inventory-management-a0515.firebaseapp.com",
  projectId: "inventory-management-a0515",
  storageBucket: "inventory-management-a0515.appspot.com",
  messagingSenderId: "33810302535",
  appId: "1:33810302535:web:f676dc8aa0b13612c71362",
  measurementId: "G-WMMW3N9P32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}