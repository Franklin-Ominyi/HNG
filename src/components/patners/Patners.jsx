import React from "react";
import "./Patners.css";
import p1 from "../../assets/mbtoken.png";
import p2 from "../../assets/metamask.png";
import p3 from "../../assets/opensea.png";

const Patners = () => {
	return (
		<div className='patners'>
			<div className='content'>
				<div>
					<img src={p1} alt='mbtoken' />
				</div>
				<div>
					<img src={p2} alt='metamask' />
				</div>
				<div>
					<img src={p3} alt='opensea' />
				</div>
			</div>
		</div>
	);
};

export default Patners;
