import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const app = firebase.initializeApp({
    apiKey: "AIzaSyDnocSljX041sRCOJT5urICsO_hYOirf8A",
    authDomain: "documentupload007.firebaseapp.com",
    databaseURL: "https://documentupload007.firebaseio.com",
    projectId: "documentupload007",
    storageBucket: "documentupload007.appspot.com",
    messagingSenderId: "720199433643",
    appId: "1:720199433643:web:6cca0e7be78e5a539166ee",
    measurementId: "G-SD7HNP27JX"
})

export const db = app.firestore();

export const auth = app.auth()