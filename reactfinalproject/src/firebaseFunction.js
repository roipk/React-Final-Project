import React from 'react';
import {Card,Button,Table} from 'react-bootstrap'
import './App.css';
import firebase from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import FruitDetail from './fruitDetail'

function temp(){
  console.log("f")
  
}

function Main() {
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
<Router>
     <nav>
       {spells.map(spell => (
        <div key={spell.name}>
         <Card style={{ width: '18rem' ,position:'absolute',left:`${spell.positionX}%`,top:`${spell.positionTOP}%`}}>
         <Card.Img variant="top" src={spell.image} width="100" height="100"/>
         <Card.Body>
           <Card.Title>{spell.name}</Card.Title>
           <Card.Text>
            {spell.description}
           </Card.Text>
           <Link to={`/fruit/${spell.name}`}>
              <Button>Details</Button>
           </Link>
         </Card.Body>
       </Card>
      </div>
       ))}
  </nav>
</Router>
  );
}
export default Main;
