import React from "react";
import "./Profile.css";
import img from "../../assets/me.jpg";

const Profile = () => {
	return (
		<div className='profile'>
			<div>
				<img src={img} alt='profile' />
			</div>
			<p>@Chitech</p>
		</div>
	);
};

export default Profile;
