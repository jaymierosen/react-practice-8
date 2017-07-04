import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
	handleChange(e){
		// target = element that is receiving the change
		const title = e.target.value;
		this.props.changeTitle(title);
	}
	handleBgColourChange(){
		// const something = 'red';
		this.props.changeBgColour();
	}
	handleDisplayText(){
		this.props.displayText();
	}
	render() {
		// console.log(this.props);
		console.log(this.props);
		//this.props is now an object
		return (
			<div>
				<Title title={this.props.title} text={this.props.text} />
				<input onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleBgColourChange.bind(this)}>Changes the background colour of the div in app.js</button>
				<button onClick={this.handleDisplayText.bind(this)}>Makes text appear</button>
			</div>
		);
	}
}
