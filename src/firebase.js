import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAYqd-0EZqlsWdaLGL9QkAz-5LoH4BIQE",
  authDomain: "servecity-cf84f.firebaseapp.com",
  projectId: "servecity-cf84f",
  storageBucket: "servecity-cf84f.firebasestorage.app",
  messagingSenderId: "872632498807",
  appId: "1:872632498807:web:448ac785b3552ea5b22472",
  measurementId: "G-5JWT56PLPX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);