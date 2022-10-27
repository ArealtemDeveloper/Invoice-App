import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZI8iTcgPCaYUxFxo74YZHW19Q0zva8oE",
    authDomain: "invoice-app-41191.firebaseapp.com",
    projectId: "invoice-app-41191",
    storageBucket: "invoice-app-41191.appspot.com",
    messagingSenderId: "266657363206",
    appId: "1:266657363206:web:94bda8cf4c3734329a9a87"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();

