import * as React from 'react'
import { useState } from 'react';


export default function Layout({ CustomClass, Img, CustomAlt, Product }) {

	const [isSelected, setisSelected] = React.useState({
		isSelected: false
	});

	const onProductClick = () => {
		setisSelected(!isSelected);
	}

	const onExpandClick = (e) => {
		e.preventDefault();
	};
	return (
		<div className="col-md-2" key={CustomClass} alt={CustomAlt} >
			<div {...isSelected ? { className: "box " } : { className: "box selected" }} key={CustomClass} alt={CustomAlt}>
				<div className={CustomClass} >
					<img className="merchImages" id="merchImages" src={Img} alt={CustomAlt} />
				</div>
				<div className="aside1">
					<a href="#" className="tool-tip">{Product}</a>
				</div>
				<div className="aside">
					{/* <div className="number"></div> <a href="#select-merch" className="expand-btn" data-bs-toggle="modal" onClick={onExpandClick}>Expand</a> */}
				</div>
			</div>
		</div>

	)
}
