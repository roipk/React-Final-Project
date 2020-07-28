import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCihZjbY0RvIjEV-_R7BBIy0UV39Br5uvo",
    authDomain: "react-final-d6e46.firebaseapp.com",
    databaseURL: "https://react-final-d6e46.firebaseio.com",
    projectId: "react-final-d6e46",
    storageBucket: "react-final-d6e46.appspot.com",
    messagingSenderId: "460497880421",
    appId: "1:460497880421:web:3284b05d900d889ee4cd8c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

