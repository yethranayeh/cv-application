/** @format */

import React from "react";
import "../styles/General.css";

function Form(props) {
	return (
		<div className='GeneralForm'>
			<form className='Form' onSubmit={props.handleSubmit}>
				<h1>General Information</h1>
				<div className='Form__Section'>
					<label htmlFor='name'>{"Name & Surname:"}</label>
					<input type='text' name='name' defaultValue={props.name} required />
				</div>
				<div className='Form__Section'>
					<label htmlFor='email'>Email:</label>
					<input type='email' name='email' defaultValue={props.email} />
				</div>
				<div className='Form__Section'>
					<label htmlFor='phone'>Phone:</label>
					<input type='tel' name='phone' defaultValue={props.phone} />
				</div>
				<button type='submit'>
					<i className='fas fa-save'></i>Save
				</button>
			</form>
		</div>
	);
}

const Information = (props) => {
	return (
		<div className='GeneralInformation'>
			<h1 className='GeneralInformation__Name'>{props.name}</h1>
			{props.email && (
				<a className='GeneralInformation__Email' href={`mailto:${props.email}`}>
					<i className='fas fa-envelope'></i>
					{props.email}
				</a>
			)}
			{props.phone && (
				<a className='GeneralInformation__Phone' href={`tel:${props.phone}`}>
					<i className='fas fa-phone-alt'></i>
					{props.phone}
				</a>
			)}
			<button onClick={props.handleEdit}>
				<i className='fas fa-i-cursor'></i>Edit
			</button>
		</div>
	);
};

class General extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
			editing: true
		};
	}

	handleEdit = () => {
		this.setState({
			editing: true
		});
	};

	saveForm = (event) => {
		event.preventDefault();

		let name = event.target.querySelector('[name="name"]').value;
		let email = event.target.querySelector('[name="email"]').value;
		let phone = event.target.querySelector('[name="phone"]').value;
		this.setState({
			name: name,
			email: email,
			phone: phone,
			editing: false
		});
	};

	render() {
		if (this.state.editing) {
			return (
				<Form name={this.state.name} email={this.state.email} phone={this.state.phone} handleSubmit={this.saveForm} />
			);
		} else {
			return (
				<Information
					name={this.state.name}
					email={this.state.email}
					phone={this.state.phone}
					handleEdit={this.handleEdit}
				/>
			);
		}
	}
}

export default General;
