import React from "react";
import "./Footer.css";
import zuri from "../../assets/zuri.png";
import zuri2 from "../../assets/ingressive.png";

export const Footer = () => {
	return (
		<div className='footer content'>
			<div>
				<img src={zuri} alt='zuri' />
			</div>
			<div>
				<p style={{ fontWeight: 400 }}>HNG Internship 9 Frontend Task</p>
			</div>
			<div>
				<img src={zuri2} alt='ingressive for good' />
			</div>
		</div>
	);
};
