// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuBu2BcrbBYxPTDwsi0CcqJ2S2c3BR9Vk",
  authDomain: "kohta-portfolio.firebaseapp.com",
  projectId: "kohta-portfolio",
  storageBucket: "kohta-portfolio.appspot.com",
  messagingSenderId: "662917929111",
  appId: "1:662917929111:web:e610b6f9325b7e625cb1d2",
  measurementId: "G-4YCT0V70DX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;
