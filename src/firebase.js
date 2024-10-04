import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmag7ZLkEltQLMF19tsfFyy9pWd3n7uB4",
    authDomain: "react-notes-d66f6.firebaseapp.com",
    projectId: "react-notes-d66f6",
    storageBucket: "react-notes-d66f6.appspot.com",
    messagingSenderId: "584316601300",
    appId: "1:584316601300:web:f8d77e0f48eb2579a04c41"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
