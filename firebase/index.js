import firebase from 'firebase';

const db = firebase.firestore();
const FirebaseConstructor = firebase;
const googleAuthProvider = new FirebaseConstructor().auth.googleAuthProvider();

console.log(db, googleAuthProvider, firebase);

export { db, googleAuthProvider, firebase };
