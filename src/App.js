import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Modal from "./components/modal/Modal";
import { AppContext } from "./context/AppContext";
import Landing from "./pages/Landing";
import Place from "./pages/place/Place";

const App = () => {
	const { setModalActive, modalActive } = useContext(AppContext);
	return (
		<div className='App'>
			<Modal setModalActive={setModalActive} modalActive={modalActive} />
			<Routes>
				<Route path='/' exact element={<Landing />} />
				<Route path='/place' exact element={<Place />} />
			</Routes>
		</div>
	);
};

export default App;
