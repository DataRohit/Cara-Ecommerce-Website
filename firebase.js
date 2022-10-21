// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmgiqXNMLL9dumBCcYzDvFiUQjMQ8HSYE",
  authDomain: "ecommerce-clothing-project.firebaseapp.com",
  projectId: "ecommerce-clothing-project",
  storageBucket: "ecommerce-clothing-project.appspot.com",
  messagingSenderId: "33552334286",
  appId: "1:33552334286:web:03914d273118f8f45c7f9f",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
