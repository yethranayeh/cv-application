/** @format */

import React from "react";
import "../styles/Education.css";

const Form = (props) => {
	return (
		<div className='Education'>
			<form className='Form' onSubmit={props.handleSubmit}>
				<h1>Education</h1>
				<div className='Form__Section'>
					<label htmlFor='school'>School Name:</label>
					<input type='text' id='school' name='school' defaultValue={props.school} required />
				</div>
				<div className='Form__Section'>
					<label htmlFor='study'>Study:</label>
					<input type='text' id='study' name='study' defaultValue={props.study} />
				</div>
				<div className='Form__Dates'>
					<div className='Form__Section'>
						<label htmlFor='start'>Start Date:</label>
						<input type='date' id='start' name='start' defaultValue={props.dateStart} required />
					</div>
					<div className='Form__Section'>
						<label htmlFor='end'>End Date:</label>
						<input type='date' id='end' name='end' defaultValue={props.dateEnd} required />
					</div>
				</div>
				<div className='Form__Buttons'>
					<button type='submit'>Save</button>
					<button onClick={props.handleCancel}>Cancel</button>
				</div>
			</form>
		</div>
	);
};

const Information = (props) => {
	return (
		<div className='EducationInformation'>
			<p className='EducationInformation__School'>{props.school}</p>
			{props.study && <p className='EducationInformation__Study'>{props.study}</p>}
			<p className='EducationInformation__Dates'>
				{props.dateStart} - {props.dateEnd}
			</p>
			<button onClick={props.handleEdit}>Edit</button>
		</div>
	);
};

class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			school: "",
			study: "",
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

		let school = event.target.querySelector('[name="school"]').value;
		let study = event.target.querySelector('[name="study"]').value;
		let dateStart = event.target.querySelector('[name="start"]').value;
		let dateEnd = event.target.querySelector('[name="end"]').value;
		this.setState({
			school: school,
			study: study,
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
					school={this.state.school}
					study={this.state.study}
					dateStart={this.state.dateStart}
					dateEnd={this.state.dateEnd}
					handleSubmit={this.saveForm}
					handleCancel={this.cancelForm}
				/>
			);
		} else if (this.state.information) {
			return (
				<Information
					school={this.state.school}
					study={this.state.study}
					dateStart={this.state.dateStart}
					dateEnd={this.state.dateEnd}
					handleEdit={this.editForm}
				/>
			);
		} else {
			return <button onClick={this.editForm}>Add</button>;
		}
	}
}

export default Education;
