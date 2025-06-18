

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCAFuh8tqs9OPIkAM8AWF0ow_W09V5vLQY",
  authDomain: "fastreact-c91b4.firebaseapp.com",
  projectId: "fastreact-c91b4",
  storageBucket: "fastreact-c91b4.firebasestorage.app",
  messagingSenderId: "882823832279",
  appId: "1:882823832279:web:0617cbe26fb9fe51f4c692"
};


 export const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export default auth;
