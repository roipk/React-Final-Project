import React from 'react';

import './App.css';
import firebase from './firebase'



function fireBaseData() {
    
 const [spells, setSpells] = React.useState([])

 React.useEffect( ()=> {
   const fetchData = async () => {
     const db = firebase.firestore()
     const data = await db.collection('times').get()
     setSpells(data.docs.map(doc => doc.data()))
   }
   fetchData()
 },[])

 console.log(spells)
  return (
   
    <div className="App">
     
     <ul>
       {spells.map(spell => (
         <li key={spell.time_seconds}>{spell.time_seconds}</li>
       ))}
     </ul>
    </div>
  );
}

export default fireBaseData;
