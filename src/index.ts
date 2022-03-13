// CSS 
import './css/main.css'; 
// import '@styles/assets/style.css'; 


// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'; 
import { setupAuthUI } from './auth-ui'; 


// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVw25L2xIQS_LBmHYtJIxpv24hfPKnsNo",
  authDomain: "poc--auth-94078.firebaseapp.com",
  projectId: "poc--auth-94078",
  storageBucket: "poc--auth-94078.appspot.com",
  messagingSenderId: "595749364366",
  appId: "1:595749364366:web:83b1805a3585bca60cdfdf",
  measurementId: "G-LDZH7SFHNZ"
};



// Initialize Firebase
const app: FirebaseApp = firebase.initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);

console.log('coucou'); 

setupAuthUI(); 
