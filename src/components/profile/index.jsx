import React from "react";
import "./Profile.css";
import img from "../../assets/me.jpg";
import icon from "../../assets/Icon.png";
import icon2 from "../../assets/Content.png";

const Profile = () => {
	return (
		<>
			<div className='profile'>
				<div className='icon-wrapper content'>
					<div className='icon-container' title='Share Link'>
						<img src={icon} className='icon desktop' alt='share' />
						<img src={icon2} className='icon mobile' alt='share' />
					</div>
				</div>
				<div>
					<img src={img} alt='profile' id='profile__img' />
				</div>
				<p id='title'>Alegu Franklin</p>
				<p id='slack'>@Chitech</p>
			</div>
		</>
	);
};

export default Profile;
