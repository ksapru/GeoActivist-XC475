import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import './VirtualizedList.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,get,child, startAt,orderByValue,query,once, on,equalTo} from "firebase/database";

const app1 = initializeApp({
  databaseURL: "https://geoactivist-default-rtdb.firebaseio.com"
});

const app2 = initializeApp({
  databaseURL: "https://geoactivist-events.firebaseio.com"
}, 'app2');

// Get the default database instance for an app1
const database1 = getDatabase(app1);

// Get a database instance for app2
const database2 = getDatabase(app2);  



function renderRow(props) {
  const { index, style } = props;
  // console.log(returnArr);
  // var dataList = returnArr.map(function(currentValue,index,array){
  //   return array[index];
  // })

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText secondary = "dcadc" />
      </ListItemButton>
    </ListItem>
  );
}





export default function VirtualizedList() {


  return (
    <Box
      sx={{ width: '100%', height: 800, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        itemSize={46}
        itemCount={2}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
