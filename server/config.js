// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgIZ7fUBvBUlQETVykowFSiXfVySmPRks",
  authDomain: "geoactivist-c151c.firebaseapp.com",
  projectId: "geoactivist-c151c",
  storageBucket: "geoactivist-c151c.appspot.com",
  messagingSenderId: "631810326416",
  appId: "1:631810326416:web:c10a09b3d6cff5f983bd15",
  measurementId: "G-BYKBP0BNQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);