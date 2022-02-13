/** @format */

import React from "react";
import "../styles/Education.css";

class Education extends React.Component {
	render() {
		return (
			<div className='Education'>
				<form className='Form'>
					<h1>Education</h1>
					<div className='Form__Section'>
						<label htmlFor='school'>School Name:</label>
						<input type='text' id='school' name='school' />
					</div>
					<div className='Form__Section'>
						<label htmlFor='study'>Study:</label>
						<input type='text' id='study' name='study' />
					</div>
					<div className='Form__Dates'>
						<div className='Form__Section'>
							<label htmlFor='start'>Start Date:</label>
							<input type='date' id='start' name='start' />
						</div>
						<div className='Form__Section'>
							<label htmlFor='end'>End Date:</label>
							<input type='date' id='end' name='end' />
						</div>
					</div>
					<button type='submit'>Save</button>
				</form>
			</div>
		);
	}
}

export default Education;
