import React from 'react';
import {Card,Button,Table} from 'react-bootstrap'
import './App.css';
import Main from "./Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import FruitDetail from './fruitDetail'

class App extends React.Component{
render(){
  return(
    //<Router>
  //    <div>
  //      <Switch>
 //         <Route path="/" component={Main} />
 //         <Route path={"/fruit/:id"} component={FruitDetail} />
  //      </Switch>
  //    </div>
  //  </Router>
  <Main/>
  );
}
}
export default App;
