import { Component } from 'react';

import './App.css';
import db from './firebase'


class FirebaseFunction extends Component{



  async componentDidMount(){
    db.collection('times')
    .get()
    .then(snapshot =>{
      const objects = []
      snapshot.forEach( doc => {
        const data = doc.data()
        objects.push(data)
      })
      this.props.arrayOfObject(objects);
    })
  }
  render(){
   return '';
  }


}

export default FirebaseFunction;
