// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBRnlhn9CNzu5fxfkyf2v4fVISdDJ-kbi4",
  authDomain: "prepwise-f8656.firebaseapp.com",
  projectId: "prepwise-f8656",
  storageBucket: "prepwise-f8656.firebasestorage.app",
  messagingSenderId: "241690671289",
  appId: "1:241690671289:web:7519d0b16b3a6285d04368",
  measurementId: "G-YMRPZ3VBG9"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp() ;
export const auth=getAuth(app)
export const db=getFirestore(app)