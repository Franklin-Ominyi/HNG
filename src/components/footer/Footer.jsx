import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.svg";
import playstore from "../../assets/playstore.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='content'>
					<div className='flex'>
						<div className='left'>
							<p>
								<Link to='/'>
									<img src={logo} alt='logo' />
								</Link>
							</p>
							<p>Job hunting has never been easier. We got you covered.</p>

							<div>
								<img src={playstore} className='playstore' alt='Google playstore' />
							</div>
						</div>
						<div className='right'>
							<div className='inner-right icons-wrapper'>
								<Link to='/'>
									<img src={facebook} alt='facebook' />
								</Link>
								<Link to='/'>
									<img src={instagram} alt='instagram' />
								</Link>
								<Link to='/'>
									<img src={twitter} alt='twitter' />
								</Link>
								<Link to='/'>
									<img src={youtube} alt='youtube' />
								</Link>
							</div>

							<div className='inner-right links-container'>
								<Link to='/company'>Company</Link>
								<Link to='/about'>About Us</Link>
								<Link to='/blog'>Blog</Link>
								<Link to='/privacy'>Privacy Policy</Link>
								<Link to='/terms'>Terms and conditions</Link>
							</div>

							<div className='inner-right'>
								<Link to='/help'>Help</Link>
								<Link to='/contact'>Contact Us</Link>
								<Link to='/faqs'>FAQs </Link>
								<Link to='/pricing'>Pricing</Link>
								<Link to='/careers'>Careers</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='content'>
					<div>2022 ApplyForMe. All right reserved.</div>
					<div className='links'>
						<Link to='/'>Cookies Policy</Link>
						<Link to='/'>Terms of Service</Link>
						<Link to='/'>Cookies Settings</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
