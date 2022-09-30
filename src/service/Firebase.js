import firebase from "firebase/compat/app";
import { getFirestore, collection, addDoc} from "firebase/firestore"
import "firebase/compat/auth";

const firebaseConfig = {
  // Your Config Goes Here
  apiKey: "AIzaSyD5QBlVE7c8zNy2gmhgzON4EU2wFX3-lnk",
  authDomain: "piratebay-9d234.firebaseapp.com",
  projectId: "piratebay-9d234",
  storageBucket: "piratebay-9d234.appspot.com",
  messagingSenderId: "142739483960",
  appId: "1:142739483960:web:476dbe0aa19ead158a25cd",
  measurementId: "G-5DRVEQ7JL7"
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export default firebase;


export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};
