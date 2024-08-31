// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq_u1s96OeSFk5Hx491VX7L5LaaV06X1U",
  authDomain: "login-auth-85854.firebaseapp.com",
  projectId: "login-auth-85854",
  storageBucket: "login-auth-85854.appspot.com",
  messagingSenderId: "324977827700",
  appId: "1:324977827700:web:a66fa49a02940b01eb5621",
  measurementId: "G-GV2DQ9CD40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;
