import React from 'react';

import {Card,Button,Table} from 'react-bootstrap'
import './App.css';
import firebase from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FruitDetail from './fruitDetail'

//test

function temp(){
  console.log("f")
  
}

function App() {


 const [spells, setSpells] = React.useState([])

 React.useEffect( ()=> {
   const fetchData = async () => {
     const db = firebase.firestore()
     const data = await db.collection('times').get()
     setSpells(data.docs.map(doc => doc.data()))
   }
   fetchData()
 },[])


  return (

     <div >
       {spells.map(spell => (
        <div>
      
         <Card style={{ width: '18rem' ,position:'absolute',left:`${spell.positionX}%`,top:`${spell.positionTOP}%`}} key={spell.id}>
         
         <Card.Img variant="top" src={spell.image} width="100" height="100"/>
         
         <Card.Body>
           <Card.Title>{spell.name}</Card.Title>
           <Card.Text>
            {spell.description}
           </Card.Text>
           <Button onClick={temp.bind()}>Detail</Button>
        
         </Card.Body>
   
       </Card>
   
 
      </div>
       ))}



</div>
    




 

  );
}


export default App;
