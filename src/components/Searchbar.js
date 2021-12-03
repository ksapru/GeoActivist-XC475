import { Search } from "@mui/icons-material";
import {React,useState} from "react";
import firebase from "firebase/compat/app";
// import firebase from 'firebase/app';
//import {firebase} from "../initFireBase.js";
import initFirebase from "../initFireBase.js";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,get,child, startAt,orderByValue,query,once, on,equalTo} from "firebase/database";
import getData from './getData';

//initFirebase();
// const db = firebase.database();
//const db = getDatabase();






// async function Look(){ 
//     const dbRef = ref(database1);
//     //const [data, setData] = useState([]);
//     var returnArr = [];
//     var newData = [];
//     var myArray = [];
//     var dbEvents = child(dbRef,"events");
//     //console.log(dbEvents);
//     var snapshot = await get(dbRef);
//     console.log(snapshot);
//     snapshot.forEach(function(childSnapshot) {
//               var item = childSnapshot.val();
//               item.key = childSnapshot.key;
//               returnArr.push(item);
//               });
//     //console.log(returnArr);
//     // get(dbRef).then((snapshot) => {
//     //       snapshot.forEach(function(childSnapshot) {
//     //       var item = childSnapshot.val();
//     //       item.key = childSnapshot.key;
//     //       returnArr.push(item);
//     //       });
//     //     //   var arrayLength = returnArr.length;
//     //     // for (var i = 0; i < arrayLength; i++) {
//     //     //     setData(oldArray => [...oldArray, returnArr[i]]);
//     //     //     //console.log(returnArr[i]);
//     //     //     //Do something
//     //     // }
//     //       newData = returnArr.filter(character=>character.category=="Protest and Demonstration");
//     //     //   console.log(newData);
//     //     //   console.log(returnArr);
//     //     //   console.log(returnArr[0]);
//     //          var arrayLength = returnArr.length;
//     //        for (var i = 0; i < arrayLength; i++) {
//     //            myArray[i] = returnArr[i];
//     //        }
//     //     });
//     //   console.log(newData);
//     //    console.log(myArray);
//     //    console.log(myArray.length);
//     // // //   setData(returnArr);
//     // console.log(data);

//     //     onValue(dbRef, (snapshot) => {
//     //     snapshot.forEach((childSnapshot) => {
//     //     const childKey = childSnapshot.key;
//     //     const childData = childSnapshot.val();
//     //     returnArr.push(childData);
//     //     console.log(childData)
//     //     });
//     // }, {
//     //     onlyOnce: true
//     // });
//     //     setData(returnArr);
//     //   console.log(data);

// };
  
export default function Searchbar(){


    // get(dbRef).then((snapshot) => { //Gives all the data points once
    //     console.log(snapshot.val());
    //   }).catch((error) => {
    //     console.error(error);
    //   });
    const data = getData();
    console.log(data);

    return(
        <form 
            className = "form" action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            {/* <div><p>{data}</p></div> */}
            <input
                type="text"
                id="header-search"
                placeholder="Search social events"
                name="s"
                //onChange = {(event) => handleSearch(event)} 
                // value={searchQuery}
                // onInput={e => setSearchQuery(e.target.value)}
            />
            <button type="submit" onClick={getData()}>Search</button> 
        </form>
// onSubmit={e=>{ 
//     e.preventDefault();
//     Look();
//     }}

    );
}

