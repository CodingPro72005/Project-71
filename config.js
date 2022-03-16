import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCFjAxX7LbKdpXZLHi4hoTgIHibzdhBdEA",
  authDomain: "library-30935.firebaseapp.com",
  projectId: "library-30935",
  storageBucket: "library-30935.appspot.com",
  messagingSenderId: "621159133697",
  appId: "1:621159133697:web:1ac2d3727d431a674b4600",
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
