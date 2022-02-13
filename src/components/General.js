/** @format */

import React from "react";
import "../styles/General.css";

class General extends React.Component {
	render() {
		return (
			<div className='General'>
				<form className='Form'>
					<h1>General Information</h1>
					<div className='Form__Section'>
						<label htmlFor='name'>{"Name & Surname:"}</label>
						<input type='text' name='name' />
					</div>
					<div className='Form__Section'>
						<label htmlFor='email'>Email:</label>
						<input type='email' name='email' />
					</div>
					<div className='Form__Section'>
						<label htmlFor='phone'>Phone:</label>
						<input type='tel' name='phone' />
					</div>
					<button type='submit'>Save</button>
				</form>
			</div>
		);
	}
}

export default General;
