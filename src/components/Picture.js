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

		// If prompt is cancelled or empty, do nothing
		// Else, if URL does not start with http, https or www. add http://
		if (newSrc === null || newSrc === "") {
			return;
		} else if (!/^(http:|https:|www.)/i.test(newSrc)) {
			newSrc = "http://" + newSrc;
		}

		// Fetch newSrc and check if response is an image type
		try {
			let response = await fetch(newSrc);
			let responseType = response.headers.get("content-type");
			if (!responseType.includes("image")) {
				alert("The URL does not return an image!");
				return;
			} else {
				this.setState({
					src: newSrc
				});
			}
		} catch (err) {
			console.error("There was an issue while fetching the image:\n" + err.message);
		}
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
