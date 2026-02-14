import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoSl6ZSt54hfr9V_0io4szIv4QDW0yC1k",
  authDomain: "natalias-nobel-nails.firebaseapp.com",
  projectId: "natalias-nobel-nails",
  storageBucket: "natalias-nobel-nails.firebasestorage.app",
  messagingSenderId: "874660202519",
  appId: "1:874660202519:web:edf2b3f726296ff911b452",
  measurementId: "G-X0E4HQYHPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;
