import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Details from "./components/details/Details";

import Main from "./components/main/Main";

const Signs = () => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);
	return (
		<div className='best-questions'>
			<Navbar />
			<Main />
			<Details />
			<Footer />
		</div>
	);
};

export default Signs;