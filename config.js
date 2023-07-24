import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDKx_fLa0MzT3i5oYJ8uVcdEh3eWWi8oRw",
    authDomain: "e-ride-app-ff8a0.firebaseapp.com",
    projectId: "e-ride-app-ff8a0",
    storageBucket: "e-ride-app-ff8a0.appspot.com",
    messagingSenderId: "74820042363",
    appId: "1:74820042363:web:8b8bb9d61aeee045e52cde"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
