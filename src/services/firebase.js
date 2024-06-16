import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;

const firebaseConfig = {
    apiKey: "AIzaSyB6RQwa-DyodeecTkAoD9qnK7W_Z0lG4ek",
    authDomain: "estudos-1f119.firebaseapp.com",
    projectId: "estudos-1f119",
    storageBucket: "estudos-1f119.appspot.com",
    messagingSenderId: "474062931997",
    appId: "1:474062931997:web:ec7f5b507283e7059fdef4",
    measurementId: "G-ZMK545YX72"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { database, app, db, auth };
