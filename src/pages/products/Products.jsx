import React from "react";
import "./Products.css";
import p1 from "../../assets/p1.svg";
import p2 from "../../assets/p2.svg";
import p3 from "../../assets/p3.svg";
import p4 from "../../assets/p4.svg";
import p5 from "../../assets/p5.svg";
import p6 from "../../assets/p6.svg";
import p7 from "../../assets/p7.svg";
import p8 from "../../assets/p8.svg";

import stars from "../../assets/stars.svg";

const Products = () => {
	return (
		<div className='products'>
			<div className='content'>
				<h1>Inspiration for your next adventure</h1>
				<div className='row'>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p1} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p2} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p3} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p4} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p5} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p6} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p7} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-3 col-sm-6'>
						<div className='item'>
							<div className='first'>
								<img src={p8} alt='product' />
							</div>
							<div className='second'>
								<div>
									<p>Desert king</p>
									<p>1MBT per night</p>
								</div>
								<div>
									<p>2345km away</p>
									<p>available for 2weeks stay</p>
								</div>
								<div>
									<img src={stars} alt='stars' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
