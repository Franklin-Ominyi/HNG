import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
const Footer = () => {
	return (
		<div className='footer'>
			<div className='content'>
				<div className='flex'>
					<div className='left'>
						<p>
							<img src={logo} alt='logo' />
						</p>
						<div className='social-icons'>
							<Link to='/'>
								<i className='fa fa-2x fa-facebook'></i>
							</Link>
							<Link to='/'>
								<i className='fa fa-2x fa-twitter'></i>
							</Link>
							<Link to='/'>
								<i className='fa fa-2x fa-instagram'></i>
							</Link>
							<Link to='/'>
								<i className='fa fa-2x fa-linkedin'></i>
							</Link>
						</div>
						<p
							dangerouslySetInnerHTML={{
								__html: `&copy; ${new Date().getFullYear()} Metabnb`,
							}}
						></p>
					</div>
					<div className='right'>
						<div className='inner-left'>
							<Link to='/'>Community</Link>
							<Link to='/'>NFT</Link>
							<Link to='/'>Tokens</Link>
							<Link to='/'>Landlords</Link>
							<Link to='/'>Discord</Link>
						</div>

						<div className='inner-right'>
							<Link to='/'>Places</Link>
							<Link to='/'>Castle</Link>
							<Link to='/'>Farms</Link>
							<Link to='/'>Beach</Link>
							<Link to='/'>Learn more</Link>
						</div>

						<div className='inner-right'>
							<Link to='/'>About us</Link>
							<Link to='/'>Road map</Link>
							<Link to='/'>Creators </Link>
							<Link to='/'>Career</Link>
							<Link to='/'>Contact us</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
