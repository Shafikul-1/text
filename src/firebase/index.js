// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALfRqrPUwFU_oNghcvQZn7MnDFKBbFseU",
  authDomain: "prodcut-95349.firebaseapp.com",
  projectId: "prodcut-95349",
  storageBucket: "prodcut-95349.appspot.com",
  messagingSenderId: "724687233750",
  appId: "1:724687233750:web:caecc554917eefc7d91f77",
  measurementId: "G-988TP3DZZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db}