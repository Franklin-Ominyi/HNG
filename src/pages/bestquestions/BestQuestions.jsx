import React, { useEffect } from "react";
import Details from "./components/details/Details";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import "./BestQuestions.css";
import Main from "./components/main/Main";

const BestQuestions = () => {
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

export default BestQuestions;
