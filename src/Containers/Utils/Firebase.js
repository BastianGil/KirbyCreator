
import * as firebase from 'firebase/app';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBEWpFyP0gHjTFY6H0rlTVG23Jsd4vKXkM",
    authDomain: "fir-bffca.firebaseapp.com",
    databaseURL: "https://fir-bffca.firebaseio.com",
    projectId: "fir-bffca",
    storageBucket: "fir-bffca.appspot.com",
    messagingSenderId: "252140128132",
    appId: "1:252140128132:web:5aec406ccc4bb461fe3fd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export const KirbysCol = db.collection('Kirbys');
  
  export default db;
  