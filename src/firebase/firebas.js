import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
   
    apiKey: "AIzaSyAjVdlYja_qfXqtrlc9pYln7MfzsnsI0AI",
    authDomain: "coderhouse-foca.firebaseapp.com",
    projectId: "coderhouse-foca",
    storageBucket: "coderhouse-foca.appspot.com",
    messagingSenderId: "38064062808",
    appId: "1:38064062808:web:4ea04eb4b315bfa49a652d",
    measurementId: "G-NBJ8VHT1HF"
}

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();