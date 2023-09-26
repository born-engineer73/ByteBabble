import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"; 
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMjnfx74CxY1PTfl5PIf9CvHUGXubwB48",
  authDomain: "chat-9c0ab.firebaseapp.com",
  projectId: "chat-9c0ab",
  storageBucket: "chat-9c0ab.appspot.com",
  messagingSenderId: "390403070514",
  appId: "1:390403070514:web:e26021b783ab713ec6ba2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage= getStorage();
export const db=getFirestore();