import firebase from 'firebase/app';
import firebase from "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDhKYrTWaZvYmzlOqi_IfXQZh7m3QFhPzw",
    authDomain: "fireblogvi.firebaseapp.com",
    projectId: "fireblogvi",
    storageBucket: "fireblogvi.appspot.com",
    messagingSenderId: "212172823414",
    appId: "1:212172823414:web:4e03a657d08c3a2ed2f857"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();