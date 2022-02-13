/** @format */

import React from "react";
import "./styles/App.css";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<General />
				<Education />
				<Practical />
			</div>
		);
	}
}

export default App;
