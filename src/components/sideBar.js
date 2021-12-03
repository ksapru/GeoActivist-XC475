import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sideBarData';
import './sideBar.css';
import { IconContext} from 'react-icons';
//import getData from './getData';
import initFirebase from "../initFireBase.js";
import { getDatabase, ref, onValue,get,child, startAt,orderByChild,query,once, on,equalTo} from "firebase/database";

//initFirebase();

function getData(){
  //   const dbRef = ref(getDatabase());
  //   var returnArr = [];
  // //const result = query(dbRef,orderByChild('category'));

  // get(dbRef).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     snapshot.forEach(function(childSnapshot) {
  //     var item = childSnapshot.val();
  //     item.key = childSnapshot.key;
  //     returnArr.push(item);
  // });
  //     console.log(returnArr);
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  // return(
  //   returnArr
  // );

} 



function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [data, setData] = useState([]);

  const dbRef = ref(getDatabase());
  var returnArr = [];
  const result = query(dbRef,orderByChild('category'));

  get(result).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
    setData(returnArr);
    //console.log(returnArr);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });


  //console.log(data[0]);
  //console.log(returnArr);
  const item = data[0];
  //console.log(item['Address']);

  //const listItems = data.map((number)=> <li>{number}</li>);
  
//   returnArr = getData();
//   console.log(returnArr);
//   var list = [];
//   returnArr.forEach(function(childSnapshot) {
//     var item = childSnapshot.val();
//     item.key = childSnapshot.key;
//     list.push(item);
//     console.log(list);
// });
//   var id = "0";
  //console.log(Object.values(returnArr)[0]);
// //   const items = returnArr.map((word, idx) => {
// //     return <li key={idx}>{word}</li>;
// // });

//const listItems = returnArr.map((d) => <li key={d.name}>{d.Address}</li>);

  return (
    <>
      <IconContext.Provider value={{ color: '#FBF3E4' }}>
          {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
          
          <div class="panel panel-primary" id="result_panel">
            <div class="panel-body">
              {/* <ul>{listItems}</ul>; */}
              {/* <ul>
                <li>{returnArr[0]}</li>
              </ul> */}
              {/* <ul>
                {listItems}
              </ul> */}
                {/* <ul class="list-group">

                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                </ul> */}
            </div>
          </div>
        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
