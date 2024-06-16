// Firebase Api's
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCXOW5b1vV0ZPs6qYaj3mCMwWtleRZDgk",
  authDomain: "rose-chat-27fe7.firebaseapp.com",
  projectId: "rose-chat-27fe7",
  storageBucket: "rose-chat-27fe7.appspot.com",
  messagingSenderId: "728635747309",
  appId: "1:728635747309:web:f4fecf88ff5149de7c95e4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
