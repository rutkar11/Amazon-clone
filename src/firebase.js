import { initializeApp } from 'firebase/app'; 
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyAIGqMC6pPDmtMre5an0rPsDEQF9Sl0FY4",
  authDomain: "clone-5bc70.firebaseapp.com",
  projectId: "clone-5bc70",
  storageBucket: "clone-5bc70.appspot.com",
  messagingSenderId: "754064975114",
  appId: "1:754064975114:web:354d4060d6d6595d9186f3",
  measurementId: "G-JT9GW8T99F"
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp); // Use getFirestore from the correct module
const auth = getAuth(firebaseApp);

export { db, auth };
