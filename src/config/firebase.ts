import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBwp-8-mBCe3lg_QEAWMXWO9PGNpKDgfdk",
  authDomain: "conseiller-consulat-v2.firebaseapp.com",
  projectId: "conseiller-consulat-v2",
  storageBucket: "conseiller-consulat-v2.firebasestorage.app",
  messagingSenderId: "679550025613",
  appId: "1:679550025613:web:3140a5b7696a27e7a3c7c4",
  measurementId: "G-KLVQSSLLV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app; 