import React from "react";
import "./Social.css";
import slack from "../../assets/slack.png";
import github from "../../assets/github.png";

const Social = () => {
	return (
		<div className='social content'>
			<div>
				<a
					href='.com/AltSchoolAfrica/'
					target='_blank'
					rel='noreferrer'
					className='icon'
				>
					<img src={slack} alt='slack' />
				</a>
			</div>
			<div>
				<a
					href='https://www.github.com/franklin-ominyi'
					target='_blank'
					rel='noreferrer'
					className='icon'
				>
					<img src={github} alt='github' />
				</a>
			</div>
		</div>
	);
};

export default Social;
