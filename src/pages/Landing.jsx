import React, { useEffect } from "react";
import Navbar from "./../components/navbar/Navbar";
import Home from "./home/Home";
import Footer from "./../components/footer/Footer";
import Faqs from "../components/faqs/Faqs";

const Landing = () => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);
	return (
		<div>
			<div className=''>
				<Navbar />
				<div className='wrapper'>
					<Home />
					<Faqs />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Landing;
