import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const { setModalActive } = useContext(AppContext);
	return (
		<div className='navbar '>
			<div className='content'>
				<div>
					<Link to='/'>
						<img src={logo} alt='afm' />
					</Link>
				</div>
				<div className='links'>
					<Link to='/about'>About us</Link>
					<Link to='/pricing'>Pricing plan</Link>
					<Link to='/blog'>Blog </Link>
					<Link to='/faqs'>FAQs</Link>
					<Link to='/contact'>Contact us</Link>
				</div>
				<div>
					<span className='button mr-4' onClick={() => setModalActive(true)}>
						Sign in
					</span>
					<span className='button' onClick={() => setModalActive(true)}>
						Get started
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
				<Link to='/about' onClick={() => setActive(false)}>
					About us
				</Link>
				<Link to='/pricing' onClick={() => setActive(false)}>
					Pricing plan
				</Link>
				<a href='/blog' onClick={() => setActive(false)}>
					Blog
				</a>
				<Link to='/faqs' onClick={() => setActive(false)}>
					FAQs
				</Link>
				<Link
					to='/contact'
					onClick={() => {
						setActive(false);
					}}
				>
					Contact us
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
