import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import './styles.css';

export default class App extends Component {
	//by default state is null
	// this.state === null;
	//state is only used for internal purposes
	// constructor() {
	// 	super();
	// 	this.state = {name: 'Jaymie'}
	// }
	constructor(){
		super();
		this.state = {
			title: 'Welcome!',
			bgColour: 'blue',
			displayText: ''
		}
		console.log(this.state);
	}
	changeTitle(title){
		this.setState({title})
		//or
		// this.setState({title: 'Welcome, Jaymie!'})
	}
	changeBgColour(){
		if(this.state.bgColour === 'blue') {
			this.setState({
				bgColour: 'red'
			})
		} else {
			this.setState({
				bgColour: 'blue'
			})
		}
	}
	displayText(){
		this.setState({
			displayText: 'Woo! You made this text appear. Magic.'
		})
	}
	render() {
		//virtual dom
		//react is spitting out a dom
		// setTimeout(() => {
		// 	this.setState({name: 'Bob'})
		// }, 1000)
		// const title = 'This is a title';
		// setTimeout(() => {
		// 	this.setState({title: 'Welcome, Jaymie!'})
		// }, 2000);
		return(
			<div className={this.state.bgColour}>
				{/*<p>Hi, my name is {this.state.name}.</p>*/}
				{/*<Header name={"Some thing"} title={title} />*/}
				{/* THE BUTTON IS IN THE HEADER COMPONENT; YOU NEED THE FUNCTION INSIDE THE COMPONENT THAT IS HANDLING THE CHANGE */}
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} changeBgColour={this.changeBgColour.bind(this)} displayText={this.displayText.bind(this)} text={this.state.displayText} />
				<Footer />
			</div>
		)
	}
}
