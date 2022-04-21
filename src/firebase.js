import * as firebase from "firebase";

var firebaseConfig = {
    databaseURL: "https://tuton-s-project.firebaseio.com/",
    apiKey: "AIzaSyA9S65KhoyMXmCD9SAI9BKJyHzomIAHJyQ",
    authDomain: "tuton-s-project.firebaseapp.com",
    projectId: "tuton-s-project",
    storageBucket: "tuton-s-project.appspot.com",
    messagingSenderId: "17607798601",
    appId: "1:17607798601:web:8ffb306fd4ce5b55657498"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();