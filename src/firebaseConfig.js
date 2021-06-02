import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "stock-advisor-c63af.firebaseapp.com",
    projectId: "stock-advisor-c63af",
    storageBucket: "stock-advisor-c63af.appspot.com",
    messagingSenderId: "456188025138",
    appId: "1:456188025138:web:0be9d9d2d548d70ac5df2b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;
// do it with all vars