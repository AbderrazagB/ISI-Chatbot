// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase config (Replace with your actual config values)
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

// Set up Google Auth provider
const googleProvider = new GoogleAuthProvider();

// Export Firebase functions
export { auth, googleProvider, signInWithPopup };
