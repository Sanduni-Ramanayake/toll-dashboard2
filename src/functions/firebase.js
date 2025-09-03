// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDo70TfKuWXiF6Fr2ZvTFb8FoYBn1JKVs",
  authDomain: "authentication-app-a7291.firebaseapp.com",
  projectId: "authentication-app-a7291",
  storageBucket: "authentication-app-a7291.firebasestorage.app",
  messagingSenderId: "388577357897",
  appId: "1:388577357897:web:f1a0deab74564bf9094f98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

async function LoginWithFirebase(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}


async function GetCurrentVehicles(params) {
  return await getDocs(collection(db, "vehicles"));
}
export { LoginWithFirebase, GetCurrentVehicles };