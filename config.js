import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAqoY1oEqk77Y5qyOpUzKtmAj0jMzf6ak8",
    authDomain: "storyhub-2-88a93.firebaseapp.com",
    projectId: "storyhub-2-88a93",
    databaseURL: "https://storyhub-2-88a93.firebaseio.com",
    storageBucket: "storyhub-2-88a93.appspot.com",
    messagingSenderId: "984252414540",
    appId: "1:984252414540:web:d9b936b302ff221fa652e9",
    measurementId: "G-R6WXLHTT4N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();