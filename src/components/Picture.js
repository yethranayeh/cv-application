/** @format */

import React from "react";
import "../styles/Picture.css";

function Picture(props) {
	return (
		<div className='Picture'>
			<img
				className='Picture__Img'
				src={props.src || "https://via.placeholder.com/124.webp?text=Image"}
				alt={props.alt || "CV Image"}
				width={124}
				height={124}
			/>
			<div className='Picture__Overlay'>
				<button className='Picture__EditButton' onClick={props.editHandler}>
					Edit
				</button>
			</div>
		</div>
	);
}

export default Picture;
