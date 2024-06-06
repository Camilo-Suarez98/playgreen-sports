import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB09MnOppcUJ-6Ic1cfaKNUPA98mPsh4rE",
  authDomain: "playgreen-sport-381a6.firebaseapp.com",
  projectId: "playgreen-sport-381a6",
  storageBucket: "playgreen-sport-381a6.appspot.com",
  messagingSenderId: "652972766252",
  appId: "1:652972766252:web:756d656ac48d6100a60d89",
  measurementId: "G-748B904P8S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
