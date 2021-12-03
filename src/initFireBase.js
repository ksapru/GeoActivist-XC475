// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/database";
import { initializeApp } from "firestore-export-import";
// import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnZ-3c2q7M8SWJbacZzkUzh6aN7bejN0I",
  authDomain: "geoactivist.firebaseapp.com",
  databaseURL: "https://geoactivist-default-rtdb.firebaseio.com",
  projectId: "geoactivist",
  storageBucket: "geoactivist.appspot.com",
  messagingSenderId: "739782111622",
  appId: "1:739782111622:web:327d358a5b51deea3ffc07",
  measurementId: "G-PJ1N0DSYEC"
};


export default function initFirebase(){
    if(!firebase.apps.length){
      const app = firebase.initializeApp({
        // use your main config
        databaseUrl: "https://geoactivist-default-rtdb.firebaseio.com/"
      });
      return app;
        // firebase.initializeApp(firebaseConfig);
    }
}

// export default initFirebase();

