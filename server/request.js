import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
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

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

const dbRef = ref(database, '/geoactivist-default-rtdb');

get(child(dbRef, `users/2My4awbrW0ahaWiYh2hBHxukDzN2`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
starCountRef.on('value', (snapshot) => {
  snapshot.array.forEach(element => {
      var childData = element.val();
  });
});