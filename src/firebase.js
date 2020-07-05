import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAbcXmkM96m3upvOj9TR2hkjuKqu2td-KQ",
    authDomain: "todoist-a5fe1.firebaseapp.com",
    databaseURL: "https://todoist-a5fe1.firebaseio.com",
    projectId: "todoist-a5fe1",
    storageBucket: "todoist-a5fe1.appspot.com",
    messagingSenderId: "799944685438",
    appId: "1:799944685438:web:fcb16a018f7e7a7c6d652f"
})

export {firebaseConfig as firebase}