import React from "react";
import "./Home.css";
import group from "../../assets/group.png";

const Home = () => {
	return (
		<>
			<div className='home'>
				<div className='content row'>
					<div className='left col-md-6 '>
						<h1>
							Rent a <span>Place</span> away from <span>Home</span> in the{" "}
							<span>Metaverse</span>
						</h1>
						<p>
							we provide you access to luxury and affordable houses in the metaverse,
							get a chance to turn your imagination to reality at your comfort zone
						</p>
						<div className='input-container'>
							<input type='text' placeholder='Search for location' />
							<button>Search</button>
						</div>
					</div>
					<div className='right col-md-6 '>
						<div>
							<img src={group} alt='nature' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
