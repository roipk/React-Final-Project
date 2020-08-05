import React from 'react';
import './App.css';
import Main from "./Main";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetail from './productDetail'
import {Dropdown} from 'react-bootstrap'
import ScrollToTop from './ScrollToTop';

class App extends React.Component{
   
	constructor(){
		super();
		this.state = {
			backGroundColor:'#62bdeb17'
		}
		this.changeBackgroundColor.bind(this)
	}

	changeBackgroundColor = (e) =>{
		this.setState({backGroundColor:e})
	}
	 
	render(){
		return(
			<div>
				<Router>
					<div className="App" style={{backgroundColor:this.state.backGroundColor}}>
						<Dropdown style={{position:'absolute',left:'5%',top:'2%'}}>
							<Dropdown.Toggle variant="success" id="dropdown-basic">Change Background Color</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("#62bdeb17")}>Gray</Dropdown.Item>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("Green")}>Green</Dropdown.Item>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("Yellow")}>Yellow</Dropdown.Item>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("Blue")}>blue</Dropdown.Item>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("Pink")}>pink</Dropdown.Item>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("Brown")}>brown</Dropdown.Item>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("Cyan")}>cyan</Dropdown.Item>
								<Dropdown.Item onClick={() => this.changeBackgroundColor("Ivory")}>ivory</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<ScrollToTop />
						<Switch>
							<Route path="/" exact component={Main} />
							<Route path='/ProductDetail/:name' component={ProductDetail} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;