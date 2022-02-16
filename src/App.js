/** @format */

import React from "react";
import "./styles/reset.css";
import "./styles/App.css";
import Picture from "./components/Picture";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<div className='Container'>
					<div className='App__Grid--1fr'>
						<Picture />
						<General />
					</div>
					<div className='App__Grid--3fr'>
						<Education />
						<Practical />
					</div>
				</div>
				<button className='App__PrintButton' onClick={window.print}>
					<i className='fas fa-print'></i>Print
				</button>
			</div>
		);
	}
}

export default App;
