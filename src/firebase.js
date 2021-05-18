import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQtANpcA20c6oV3cRfb_jUvrqAxnGijts",
  authDomain: "react-disney-clone-d5025.firebaseapp.com",
  projectId: "react-disney-clone-d5025",
  storageBucket: "react-disney-clone-d5025.appspot.com",
  messagingSenderId: "451986208224",
  appId: "1:451986208224:web:b3c6a8323c1cc2992c2785",
  measurementId: "G-W2PMRKH00E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
