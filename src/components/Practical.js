/** @format */

import React from "react";

const Form = (props) => {
	return (
		<div className='Practical'>
			<form className='Form' onSubmit={props.handleSubmit}>
				<h1>Practical Experience</h1>
				<div className='Form__Section'>
					<label htmlFor='company'>Company Name:</label>
					<input type='text' id='company' name='company' required />
				</div>
				<div className='Form__Section'>
					<label htmlFor='position'>Position Title:</label>
					<input type='text' id='position' name='position' required />
				</div>
				<div className='Form__Section'>
					<label htmlFor='tasks'>Main Tasks:</label>
					<input type='text' id='tasks' name='tasks' />
				</div>
				<div className='Form__Dates'>
					<div className='Form__Section'>
						<label htmlFor='start'>Start Date:</label>
						<input type='date' id='start' name='start' required />
					</div>
					<div className='Form__Section'>
						<label htmlFor='end'>End Date:</label>
						<input type='date' id='end' name='end' required />
					</div>
				</div>
				<button type='submit'>Save</button>
				<button type='submit' onClick={props.handleCancel}>
					Cancel
				</button>
			</form>
		</div>
	);
};

const Information = (props) => {
	return (
		<div className='PracticalInformation'>
			<p className='PracticalInformation__Company'>{props.company}</p>
			<p className='PracticalInformation__Position'>{props.position}</p>
			<p className='PracticalInformation__Tasks'>{props.tasks}</p>
			<p className='PracticalInformation__Dates'>
				{props.dateStart} - {props.dateEnd}
			</p>
			<button onClick={props.handleEdit}>Edit</button>
		</div>
	);
};

class Practical extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			company: "",
			position: "",
			tasks: "",
			dateStart: "",
			dateEnd: "",
			editing: false,
			information: false
		};
	}

	editForm = () => {
		this.setState({
			editing: true
		});
	};

	saveForm = (event) => {
		event.preventDefault();
		let company = event.target.querySelector('[name="company"]').value;
		let position = event.target.querySelector('[name="position"]').value;
		let tasks = event.target.querySelector('[name="tasks"]').value;
		let dateStart = event.target.querySelector('[name="start"]').value;
		let dateEnd = event.target.querySelector('[name="end"]').value;
		this.setState({
			company: company,
			position: position,
			tasks: tasks,
			dateStart: dateStart,
			dateEnd: dateEnd,
			editing: false,
			information: true
		});
	};

	cancelForm = () => {
		this.setState({
			editing: false
		});
	};

	render() {
		if (this.state.editing) {
			return (
				<Form
					company={this.state.company}
					position={this.state.position}
					tasks={this.state.tasks}
					dateStart={this.state.dateStart}
					dateEnd={this.state.dateEnd}
					handleSubmit={this.saveForm}
					handleCancel={this.cancelForm}
				/>
			);
		} else if (this.state.information) {
			return (
				<Information
					company={this.state.company}
					position={this.state.position}
					tasks={this.state.tasks}
					dateStart={this.state.dateStart}
					dateEnd={this.state.dateEnd}
					handleEdit={this.editForm}
				/>
			);
		} else {
			return (
				<div>
					<h1>Practical Experience</h1>
					<button onClick={this.editForm}>Add</button>
				</div>
			);
		}
	}
}

export default Practical;
