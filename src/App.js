import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { ContactMe } from "./pages/contactme";

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/contact' element={<ContactMe />} />
			</Routes>
		</div>
	);
}

export default App;
