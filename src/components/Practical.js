/** @format */

import React from "react";
import "../styles/Practical.css";

const Form = (props) => {
	if (props.formActive) {
		return (
			<div className='Practical'>
				<form className='Form' onSubmit={props.handleSubmit}>
					<div className='Form__Section'>
						<label htmlFor='company'>Company Name:</label>
						<input type='text' id='company' name='company' defaultValue={props.formValues.company} required />
					</div>
					<div className='Form__Section'>
						<label htmlFor='position'>Position Title:</label>
						<input type='text' id='position' name='position' defaultValue={props.formValues.position} required />
					</div>
					<div className='Form__Section'>
						<label htmlFor='tasks'>Main Tasks:</label>
						<input type='text' id='tasks' name='tasks' defaultValue={props.formValues.tasks} />
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
						<button type='submit'>
							<i className='fas fa-save'></i>Save
						</button>
						<button type='submit' onClick={props.handleCancel}>
							<i className='fa fa-times'></i>Cancel
						</button>
					</div>
				</form>
			</div>
		);
	} else {
		return (
			<div className='Form__Buttons'>
				<button onClick={props.handleAdd}>
					<i className='fas fa-plus'></i>Add
				</button>
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
				company: props.company,
				position: props.position,
				tasks: props.tasks,
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
		let company = event.target.querySelector('[name="company"]').value;
		let position = event.target.querySelector('[name="position"]').value;
		let tasks = event.target.querySelector('[name="tasks"]').value;
		let dateStart = event.target.querySelector('[name="start"]').value;
		let dateEnd = event.target.querySelector('[name="end"]').value;

		this.setState({
			formActive: false,
			formValues: {
				company: company,
				position: position,
				tasks: tasks,
				dateStart: dateStart,
				dateEnd: dateEnd
			}
		});
		console.info("state after:", this.state);
	};

	handleCancel = () => {
		this.setState({
			formActive: false
		});
	};

	render() {
		if (!this.state.formActive) {
			return (
				<div className='Information PracticalInformation'>
					<p className='PracticalInformation__Company'>{this.state.formValues.company}</p>
					<p className='PracticalInformation__Position'>{this.state.formValues.position}</p>
					{this.state.formValues.tasks && <p className='PracticalInformation__Tasks'>{this.state.formValues.tasks}</p>}
					<p className='PracticalInformation__Dates'>
						{this.state.formValues.dateStart} - {this.state.formValues.dateEnd}
					</p>
					<button className='Button--Edit' onClick={this.handleEdit}>
						<i className='fas fa-i-cursor'></i>Edit
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

class Practical extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: [],
			information: false,
			formActive: false,
			formValues: {
				company: "",
				position: "",
				tasks: "",
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

		let company = event.target.querySelector('[name="company"]').value;
		let position = event.target.querySelector('[name="position"]').value;
		let tasks = event.target.querySelector('[name="tasks"]').value;
		let dateStart = event.target.querySelector('[name="start"]').value;
		let dateEnd = event.target.querySelector('[name="end"]').value;
		this.setState({
			entries: [
				...this.state.entries,
				{
					id: this.state.entries.length,
					company: company,
					position: position,
					tasks: tasks,
					dateStart: dateStart,
					dateEnd: dateEnd,
					editing: false
				}
			],
			formActive: false,
			// formValues: {},
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
					company={entry.company}
					position={entry.position}
					tasks={entry.tasks}
					dateStart={entry.dateStart}
					dateEnd={entry.dateEnd}
					handleEdit={this.editForm}
					handleUpdate={this.updateForm}
				/>
			));
			return (
				<div className='Practical'>
					<h2>Practical Experience</h2>
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
				<div className='Practical'>
					<h2>Practical Experience</h2>
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

export default Practical;
