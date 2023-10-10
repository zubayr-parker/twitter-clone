// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdsIKEXuzrZIFZX0XEQ3N55qt9BYYU7Fo",
  authDomain: "twitter-clone-4ad76.firebaseapp.com",
  projectId: "twitter-clone-4ad76",
  storageBucket: "twitter-clone-4ad76.appspot.com",
  messagingSenderId: "215645887283",
  appId: "1:215645887283:web:7af00eb07e3671571d7c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)