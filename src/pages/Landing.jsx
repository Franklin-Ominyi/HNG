import React from "react";
import Navbar from "./../components/navbar/Navbar";
import Home from "./home/Home";
import Patners from "./../components/patners/Patners";
import Products from "./products/Products";
import Nfts from "./nfts/Nfts";
import Footer from "./../components/footer/Footer";

const Landing = () => {
	return (
		<div>
			<div className=''>
				<Navbar />
				<div className='wrapper'>
					<Home />
					<Patners />
					<Products />
					<Nfts />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Landing;
