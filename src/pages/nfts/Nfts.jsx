import React from "react";
import "./Nfts.css";
import nfts from "../../assets/nfts.svg";

const Nfts = () => {
	return (
		<div className='nfts'>
			<div className='content'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='left'>
							<div>
								<h1>Metabnb NFTs</h1>
							</div>
							<div>
								<p>
									Discover our NFT gift cards collection. Loyal customers gets amazing
									gift cards which are traded as NFTs. These NFTs gives our cutomer
									access to loads of our exclusive services.
								</p>
							</div>
							<div>
								<button className='button'>Learn more</button>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<img src={nfts} alt='nfts' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nfts;
