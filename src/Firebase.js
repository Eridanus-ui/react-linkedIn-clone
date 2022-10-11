import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFC__MCipIOOkuQjD-uK6LjDVaTI1bm-M",
  authDomain: "linkedin-clone-c8c3a.firebaseapp.com",
  projectId: "linkedin-clone-c8c3a",
  storageBucket: "linkedin-clone-c8c3a.appspot.com",
  messagingSenderId: "641172357600",
  appId: "1:641172357600:web:82b3eb84f0b8660f13eb85",
  measurementId: "G-PT5TXXC4S4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
