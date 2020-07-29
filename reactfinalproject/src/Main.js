
import React from 'react';
import FirebaseFunction from './firebaseFunction'
import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            arrayOfObject:[]
        }
    }

    acceptArrayOfObject = (arrayOfObject) =>{
        this.setState({arrayOfObject})
    }

    render()
    {
        console.log(this.state.arrayOfObject)
        return(
         <div>
        
           <FirebaseFunction arrayOfObject={this.acceptArrayOfObject.bind(this)}/>
         
           {this.state.arrayOfObject.map(object => (
            <div key={object.name}>
              <Card style={{ width: '18rem' ,position:'absolute',left:`${object.positionX}%`,top:`${object.positionTOP}%`}}>
                <Card.Img variant="top" src={object.image} width="100" height="100"/>
                  <Card.Body>
                    <Card.Title>{object.name}</Card.Title>
                    <Card.Text>
                     {object.description}
                    </Card.Text>
                      <Link to={`/FruitDetail/${object.name}`}>
                         <Button>Details</Button>
                      </Link>
                  </Card.Body>
             </Card>
           </div>
           ))}

         </div>
       
      
        );
    }
}

export default Main;