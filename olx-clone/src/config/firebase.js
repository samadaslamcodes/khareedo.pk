import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5GOvnrC2p4hFRm5kBwaX-uS2GOgH7-so",
  authDomain: "ecommerce-app-e8ca3.firebaseapp.com",
  projectId: "ecommerce-app-e8ca3",
  storageBucket: "ecommerce-app-e8ca3.firebasestorage.app",
  messagingSenderId: "1019340563629",
  appId: "1:1019340563629:web:1987bb56afc8e43ae79224",
  measurementId: "G-H5KT3PM30S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
