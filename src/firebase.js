import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoLRPZfHnyXQ1ImGyCUmVa2SPxc_GCKNw",
  authDomain: "clone-11c85.firebaseapp.com",
  databaseURL: "https://clone-11c85.firebaseio.com",
  projectId: "clone-11c85",
  storageBucket: "clone-11c85.appspot.com",
  messagingSenderId: "1005534138843",
  appId: "1:1005534138843:web:81f93bec8cc822ede0d7fe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
