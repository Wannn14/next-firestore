// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjDwpMKOT1XeKQuKAfzDrBBIZk_ZY6oFk",
  authDomain: "nextjs-firestore-9f20c.firebaseapp.com",
  projectId: "nextjs-firestore-9f20c",
  storageBucket: "nextjs-firestore-9f20c.appspot.com",
  messagingSenderId: "966074213761",
  appId: "1:966074213761:web:27f5e9c90b24950d3df480",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
