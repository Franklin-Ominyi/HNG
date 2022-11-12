import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const { setModalActive } = useContext(AppContext);
	return (
		<div className='navbar '>
			<div className='content'>
				<div>
					<img src={logo} alt='Metabnb' />
				</div>
				<div className='links'>
					<Link to='/'>Home</Link>
					<Link to='/place'>Place to stay</Link>
					<Link to='/'>NFTs</Link>
					<Link to='/'>Community</Link>
				</div>
				<div>
					<span className='button' onClick={() => setModalActive(true)}>
						Connect wallet
					</span>
				</div>

				{active && (
					<p className='mobile' onClick={() => setActive(false)}>
						X
					</p>
				)}
				{!active && (
					<p className='mobile' onClick={() => setActive(true)}>
						<i className='fa fa-bars mr-1' aria-hidden='true'></i>
					</p>
				)}
			</div>
			<div className={`mobile-menu ${active ? "active" : ""}`}>
				<Link to='/' onClick={() => setActive(false)}>
					Home
				</Link>
				<Link to='/place' onClick={() => setActive(false)}>
					Place to stay
				</Link>
				<a href='/' onClick={() => setActive(false)}>
					NFTs
				</a>
				<Link to='/' onClick={() => setActive(false)}>
					Community
				</Link>
				<Link
					to='/'
					onClick={() => {
						setActive(false);
						setModalActive(true);
					}}
				>
					Connect to Wallet
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
