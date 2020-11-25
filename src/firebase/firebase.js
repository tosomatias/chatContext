import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



    const firebaseConfig = {
    apiKey: "AIzaSyDfkqBSZPKB5eE9TQjZ0VpBFdPT1K07QA4",
    authDomain: "chat-6ea60.firebaseapp.com",
    databaseURL: "https://chat-6ea60.firebaseio.com",
    projectId: "chat-6ea60",
    storageBucket: "chat-6ea60.appspot.com",
    messagingSenderId: "352603730725",
    appId: "1:352603730725:web:afe6ed6a2a2caac13120cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new  firebase.auth.GoogleAuthProvider();

export  {db,auth,provider}
