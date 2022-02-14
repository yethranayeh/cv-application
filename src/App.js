/** @format */

import React from "react";
import "./styles/reset.css";
import "./styles/App.css";
import Picture from "./components/Picture";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pictureSrc: "https://via.placeholder.com/124.webp?text=Test"
		};
	}

	changeImage = () => {
		let newSrc = prompt("Enter new image URL (It will be resized to 124x124px):");
		this.setState({
			pictureSrc: newSrc
		});
	};

	render() {
		return (
			<div className='App'>
				<div className='Container'>
					<div className='App__Grid--1fr'>
						<Picture src={this.state.pictureSrc} editHandler={this.changeImage} />
						<General />
					</div>
					<div className='App__Grid--3fr'>
						<Education />
						<Practical />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
