
import { initializeApp } from "firebase/app";


import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

let db, auth;

// Configurações do firebase
const firebaseConfig = {
  apiKey: "AIzaSyCASGkjFTLBv64hoxcIZoMrhTEa62jvxMU",
  authDomain: "catalog-ed359.firebaseapp.com",
  projectId: "catalog-ed359",
  storageBucket: "catalog-ed359.appspot.com",
  messagingSenderId: "701733858632",
  appId: "1:701733858632:web:2bc7f61cf9119382ee577d"
};

// iniciar o Firebase
const app = initializeApp(firebaseConfig);
auth = getAuth();
db = getFirestore();

const provider = new GoogleAuthProvider();


export {
  auth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getFirestore,
  addDoc,
  collection,
  db,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
};

//idk