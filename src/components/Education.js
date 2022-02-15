/** @format */

import React from "react";
import "../styles/Education.css";

const Form = (props) => {
	if (props.formActive) {
		return (
			<div className='Education'>
				<form className='Form' onSubmit={props.handleSubmit}>
					<div className='Form__Section'>
						<label htmlFor='school'>School Name:</label>
						<input type='text' id='school' name='school' defaultValue={props.formValues.school} required />
					</div>
					<div className='Form__Section'>
						<label htmlFor='study'>Study:</label>
						<input type='text' id='study' name='study' defaultValue={props.formValues.study} />
					</div>
					<div className='Form__Dates'>
						<div className='Form__Section'>
							<label htmlFor='start'>Start Date:</label>
							<input type='date' id='start' name='start' defaultValue={props.formValues.dateStart} required />
						</div>
						<div className='Form__Section'>
							<label htmlFor='end'>End Date:</label>
							<input type='date' id='end' name='end' defaultValue={props.formValues.dateEnd} required />
						</div>
					</div>
					<div className='Form__Buttons'>
						<button type='submit'>Save</button>
						<button onClick={props.handleCancel}>Cancel</button>
					</div>
				</form>
			</div>
		);
	} else {
		return (
			<div className='Form__Buttons'>
				<button onClick={props.handleAdd}>Add</button>
			</div>
		);
	}
};

class Information extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formActive: false,
			formValues: {
				school: props.school,
				study: props.study,
				dateStart: props.dateStart,
				dateEnd: props.dateEnd
			}
		};
	}

	handleEdit = () => {
		this.setState({
			formActive: true
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let school = event.target.querySelector('[name="school"]').value;
		let study = event.target.querySelector('[name="study"]').value;
		let dateStart = event.target.querySelector('[name="start"]').value;
		let dateEnd = event.target.querySelector('[name="end"]').value;

		this.setState({
			formActive: false,
			formValues: {
				school: school,
				study: study,
				dateStart: dateStart,
				dateEnd: dateEnd
			}
		});
	};

	handleCancel = () => {
		this.setState({
			formActive: false
		});
	};

	render() {
		if (!this.state.formActive) {
			return (
				<div className='Information EducationInformation'>
					<p className='EducationInformation__School'>{this.state.formValues.school}</p>
					{this.state.formValues.study && <p className='EducationInformation__Study'>{this.state.formValues.study}</p>}
					<p className='EducationInformation__Dates'>
						{this.state.formValues.dateStart} - {this.state.formValues.dateEnd}
					</p>
					<button className='Button--Edit' onClick={this.handleEdit}>
						Edit
					</button>
				</div>
			);
		} else {
			return (
				<Form
					formActive={this.state.formActive}
					handleSubmit={this.handleSubmit}
					handleCancel={this.handleCancel}
					formValues={this.state.formValues}
				/>
			);
		}
	}
}

class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: [],
			information: false,
			formActive: false,
			formValues: {
				school: "",
				study: "",
				dateStart: "",
				dateEnd: ""
			}
		};
	}

	addForm = () => {
		this.setState({ formActive: true });
	};

	editForm = (entryID) => {
		const id = Number(entryID);
		const entry = this.state.entries[id];
		this.setState({
			formActive: true,
			formValues: entry
		});
	};

	saveForm = (event) => {
		event.preventDefault();

		let school = event.target.querySelector('[name="school"]').value;
		let study = event.target.querySelector('[name="study"]').value;
		let dateStart = event.target.querySelector('[name="start"]').value;
		let dateEnd = event.target.querySelector('[name="end"]').value;
		this.setState({
			entries: [
				...this.state.entries,
				{
					id: this.state.entries.length,
					school: school,
					study: study,
					dateStart: dateStart,
					dateEnd: dateEnd,
					editing: false
				}
			],
			formActive: false,
			information: true
		});
	};

	updateForm = (event) => {};

	cancelForm = () => {
		this.setState({
			formActive: false
		});
	};

	render() {
		if (this.state.information) {
			const info = this.state.entries.map((entry) => (
				<Information
					key={entry.id}
					id={entry.id}
					school={entry.school}
					study={entry.study}
					dateStart={entry.dateStart}
					dateEnd={entry.dateEnd}
					handleEdit={this.editForm}
					handleUpdate={this.updateForm}
				/>
			));
			return (
				<div className='Education'>
					<h2>Education</h2>
					{info}
					<Form
						formActive={this.state.formActive}
						formValues={this.state.formValues}
						handleSubmit={this.saveForm}
						handleAdd={this.addForm}
						handleCancel={this.cancelForm}
					/>
				</div>
			);
		} else {
			return (
				<div className='Education'>
					<h2>Education</h2>
					<Form
						formActive={this.state.formActive}
						formValues={this.state.formValues}
						handleSubmit={this.saveForm}
						handleAdd={this.addForm}
						handleCancel={this.cancelForm}
					/>
				</div>
			);
		}
	}
}

export default Education;
