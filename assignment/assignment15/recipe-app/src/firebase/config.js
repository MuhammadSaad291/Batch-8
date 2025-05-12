// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmQOQ7nDKwQ6ZAvCGDaQHXj1QZFDNHOTI",
  authDomain: "recipe-app-df0ff.firebaseapp.com",
  projectId: "recipe-app-df0ff",
  storageBucket: "recipe-app-df0ff.firebasestorage.app",
  messagingSenderId: "16205867882",
  appId: "1:16205867882:web:a2e21147be85c8aa515313",
  measurementId: "G-ZHZXLRB3RF"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
