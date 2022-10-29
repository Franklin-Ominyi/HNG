import "./App.css";
import Profile from "./components/profile";
import ListLinks from "./components/listlinks";
import Social from "./components/social";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className='app'>
			<Profile />
			<ListLinks />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
