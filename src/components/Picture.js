/** @format */

import React from "react";
import "../styles/Picture.css";

class Picture extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			src: "https://via.placeholder.com/124.webp?text=Image",
			alt: "CV Image"
		};
	}

	changeImage = async () => {
		let newSrc = prompt("Enter new image URL (It will be resized to 124x124px):");
		this.setState({
			src: newSrc
		});
		this.updateStorage();
	};

	render() {
		return (
			<div className='Picture'>
				<div className='Picture__Container'>
					<img className='Picture__Img' src={this.state.src} alt={this.state.alt} width={124} height={124} />
					<div className='Picture__Overlay'>
						<button className='Picture__EditButton' onClick={this.changeImage}>
							Edit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Picture;
