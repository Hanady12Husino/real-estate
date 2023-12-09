// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'real-estate-agency-ee78e.firebaseapp.com',
  projectId: 'real-estate-agency-ee78e',
  storageBucket: 'real-estate-agency-ee78e.appspot.com',
  messagingSenderId: '561944994421',
  appId: '1:561944994421:web:2da1cf1872f868fa054e3c',
  measurementId: 'G-13CZDF2MQ5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
