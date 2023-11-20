import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {  getFunctions } from "firebase/functions";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWEsq-fFe_TYKaiIUbb25UM7ACcsc0BAo",
  authDomain: "acendi-demo.firebaseapp.com",
  projectId: "acendi-demo",
  storageBucket: "acendi-demo.appspot.com",
  messagingSenderId: "148245445528",
  appId: "1:148245445528:web:27f6ef3d23dff9fd8d09ed"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
