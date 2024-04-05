// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyxPPkiuOid2DKH-OXDrLFo0Yi06KKDGo",
    authDomain: "crowdfundme-9e28c.firebaseapp.com",
    projectId: "crowdfundme-9e28c",
    storageBucket: "crowdfundme-9e28c.appspot.com",
    messagingSenderId: "726156296622",
    appId: "1:726156296622:web:53fdaefa3c70cc304b483f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
