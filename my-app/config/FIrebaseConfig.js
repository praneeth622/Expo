// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcBKQVaH12vnQiuqrDV-YSWk2W2Vttr2k",
  authDomain: "apps-31dc3.firebaseapp.com",
  projectId: "apps-31dc3",
  storageBucket: "apps-31dc3.appspot.com",
  messagingSenderId: "157551749905",
  appId: "1:157551749905:web:8f2fb178c0624e09a03ab0",
  measurementId: "G-JMMGPWLZMD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);