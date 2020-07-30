
import React from 'react';
import FirebaseFunction from './firebaseFunction'
import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Main.css'
import 'bootstrap/dist/css/bootstrap.css';


class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            arrayOfObject:[],
            positionX:0
        }
    }

    acceptArrayOfObject = (arrayOfObject) =>{
        this.setState({arrayOfObject})
    }

    render()
    {
   
        console.log(this.state.arrayOfObject)
        return(
        
          <div >
            
         <div style={{color: "red"}} >
           <h1 style={{color:'black',fontWeight:'bold'}}>Grocery List</h1>
           <FirebaseFunction arrayOfObject={this.acceptArrayOfObject.bind(this)}/>
         
           {this.state.arrayOfObject.map(object => (
            
            <div key={object.name} >
             
              <Card bg="dark" style={{ width: '14%',height:'50%' ,position:'absolute',left:`${object.positionX}%`,top:`${object.positionTOP+5}%`}}>
                <Card.Img variant="top" src={object.image} style={{width: '100%',height:'50%' }}/>
                  <Card.Body  >
                    <Card.Title>{object.name}</Card.Title>
                  
                    <Link to={{ 
                       pathname:`/FruitDetail/${object.name}`, 
                       state: object }}>
                        <Button>Details</Button>
                    </Link>
                    
                  </Card.Body>
             </Card>
           </div>
          
           ))}

         </div>
         </div>
      
        );
    }
}

export default Main;