import React from "react";
import "./Place.css";
import Listplace from "../../components/listplace/Listplace";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import setting from "../../assets/setting.svg";

const Place = () => {
	return (
		<>
			<Navbar />
			<div className='place-wrapper'>
				<div className='content d-flex top-nav'>
					<p>Resturant</p>
					<p>Cottage</p>
					<p>Castle</p>
					<p>fantast city</p>
					<p>beach</p>
					<p>Carbins</p>
					<p>Off-grid</p>
					<p>Farm</p>
					<div className='input-wrapper'>
						<div>
							<input type='text' placeholder='Location' />
						</div>
						<div className='img-wrapper'>
							<img src={setting} alt='setting' />
						</div>
					</div>
				</div>
				<div className='content py-5'>
					<Listplace />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Place;
