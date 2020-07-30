import React from 'react';
import './App.css';
import Main from "./Main";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FruitDetail from './fruitDetail'

class App extends React.Component{
render(){
  return(
    <Router >
     <div className="App">
       <Switch>
         <Route path="/" exact component={Main} />
         <Route path='/FruitDetail/:name' component={FruitDetail} />
       </Switch>
     </div>
   </Router>
  );
}
}
export default App;