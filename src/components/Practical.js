/** @format */

import React from "react";

const CompanyName = (props) => {
	return (
		<div className='Form__Section'>
			<label htmlFor='company'>Company Name:</label>
			<input type='text' id='company' name='company' />
		</div>
	);
};

const PositionTitle = (props) => {
	return (
		<div className='Form__Section'>
			<label htmlFor='position'>Position Title:</label>
			<input type='text' id='position' name='position' />
		</div>
	);
};

const MainTasks = (props) => {
	return (
		<div className='Form__Section'>
			<label htmlFor='mainTasks'>Main Tasks:</label>
			<input type='text' id='mainTasks' name='mainTasks' />
		</div>
	);
};

const WorkDates = (props) => {
	return (
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
	);
};

class Practical extends React.Component {
	render() {
		return (
			<div className='Practical'>
				<form className='Form'>
					<h1>Practical</h1>
					<CompanyName />
					<PositionTitle />
					<MainTasks />
					<WorkDates />
					<button type='submit'>Save</button>
				</form>
			</div>
		);
	}
}

export default Practical;
