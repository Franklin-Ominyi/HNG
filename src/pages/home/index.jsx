import React from "react";
import { Footer } from "../../components/footer";
import ListLinks from "../../components/listlinks";
import Profile from "../../components/profile";
import Social from "../../components/social";

export const Home = () => {
	return (
		<div>
			<Profile />
			<ListLinks />
			<Social />
			<Footer />
		</div>
	);
};
