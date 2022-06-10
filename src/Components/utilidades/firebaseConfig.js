// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMbH4D4SwCBypdAVLvJD2RNgB3jAdYbs8",
  authDomain: "armen-de1b9.firebaseapp.com",
  projectId: "armen-de1b9",
  storageBucket: "armen-de1b9.appspot.com",
  messagingSenderId: "535504341320",
  appId: "1:535504341320:web:f92a91e8eb26dd1a0f8b7d",
  measurementId: "G-69FRLDLMVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app)

export default dataBase