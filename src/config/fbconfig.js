import { initializeApp } from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBITsICHXM6u_bn3IF9Wqn6ERDYrlprUmg",
    authDomain: "note-app-fd47d.firebaseapp.com",
    projectId: "note-app-fd47d",
    storageBucket: "note-app-fd47d.appspot.com",
    messagingSenderId: "379800449051",
    appId: "1:379800449051:web:d52845c562b4262efc48be"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default firebaseConfig;