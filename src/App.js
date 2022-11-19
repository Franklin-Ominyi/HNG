import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Modal from "./components/modal/Modal";
import { AppContext } from "./context/AppContext";
import BestQuestions from "./pages/bestquestions/BestQuestions";
import Brand from "./pages/brand/Brand";
import Cover from "./pages/cover/Cover";
import Endorsment from "./pages/endorsement/Endorsement";
import Landing from "./pages/Landing";
import Resume from "./pages/resume/Resume";
import Signs from "./pages/signs/Signs";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";

const App = () => {
	const { setModalActive, modalActive } = useContext(AppContext);
	return (
		<div className='App'>
			<Modal setModalActive={setModalActive} modalActive={modalActive} />
			<Routes>
				<Route path='/' exact element={<Landing />} />

				<Route path='/questions' exact element={<BestQuestions />} />
				<Route path='/signs' exact element={<Signs />} />
				<Route path='/cover' exact element={<Cover />} />
				<Route path='/resume' exact element={<Resume />} />
				<Route path='/brand' exact element={<Brand />} />
				<Route path='/endorsment' exact element={<Endorsment />} />
				<Route path='/skills' exact element={<Skills />} />
				<Route path='/work' exact element={<Work />} />
			</Routes>
		</div>
	);
};

export default App;
