import firebase from "firebase";
// require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChCa7QNh5mg9KT5om5jB6a4nkwSMGc-Zc",
  authDomain: "take-console.firebaseapp.com",
  projectId: "take-console",
  storageBucket: "take-console.appspot.com",
  messagingSenderId: "741409197969",
  appId: "1:741409197969:web:2e7056e283661ecf101430",
  measurementId: "G-K09HJ39T5N"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
