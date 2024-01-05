
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtV8uMJBtetnnXeg9y9HozLVpGj-3-0BM",
  authDomain: "pawprints-91787.firebaseapp.com",
  projectId: "pawprints-91787",
  storageBucket: "pawprints-91787.appspot.com",
  messagingSenderId: "392144738689",
  appId: "1:392144738689:web:334099d3768b6e20e07080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };