// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQxAn0ak3u_ZHvc7boLmUN8yAA2dPRaKs",
  authDomain: "netflix-gpt-daf73.firebaseapp.com",
  projectId: "netflix-gpt-daf73",
  storageBucket: "netflix-gpt-daf73.firebasestorage.app",
  messagingSenderId: "166878593901",
  appId: "1:166878593901:web:9f80b601857a12bc419064",
  measurementId: "G-612E93F929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();