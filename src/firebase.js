import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChmgzWZZ1w19UmPQb8ewBTRmZocxhEJdI",
    authDomain: "react-redux-clone-discord.firebaseapp.com",
    projectId: "react-redux-clone-discord",
    storageBucket: "react-redux-clone-discord.appspot.com",
    messagingSenderId: "265758456503",
    appId: "1:265758456503:web:6c69321d139e823a8aeb32",
    measurementId: "G-52E61B1YLK"
  };

// initialize firebaseApp with the firebaseConfig from firebase library sdk
const firebaseApp = firebase.initializeApp(firebaseConfig);
// get the firebase db instance in firestore 
const db = firebaseApp.firestore();
// get the auth from firebase
const auth = firebase.auth();
// get the authentication sign-in provider instance
const provider = new firebase.auth.GoogleAuthProvider();

// export the auth and provider as explicit exports
export { auth, provider };
// default export the db
export default db;