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
            
			<div >
			<span>Grocery List</span>	
			<FirebaseFunction arrayOfObject={this.acceptArrayOfObject.bind(this)}/>
         
			{this.state.arrayOfObject.map(object => (
            
			<div key={object.name} >
             
				<Card bg="dark" style={{ width: '14%',height:'50%' ,position:'absolute',left:`${object.positionX}%`,top:`${object.positionTOP+5}%`}}>
                <Card.Img variant="top" src={object.image} style={{width: '100%',height:'50%' }}/>
				<Card.Body  >
                    <Card.Title style={{color:'white'}}>{object.name}</Card.Title>
                  
					<Link to={{ 
						pathname:`/ProductDetail/${object.name}`, 
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