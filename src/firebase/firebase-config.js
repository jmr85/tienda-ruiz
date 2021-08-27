import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyDwDv-agOWxtWUXlscMvgUFd-A92zNK5Ww",
  authDomain: "eccomerce-jruiz.firebaseapp.com",
  projectId: "eccomerce-jruiz",
  storageBucket: "eccomerce-jruiz.appspot.com",
  messagingSenderId: "106011146713",
  appId: "1:106011146713:web:78a027d08de9a73bca81c8",
  measurementId: "G-4R0YDQWDL3"
});

// Initialize Firebase
export const getFirebase = () => app;
//const analytics = getAnalytics(app);

//export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);