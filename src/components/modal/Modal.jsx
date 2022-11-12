import React from "react";
import "./Modal.css";
import arrow_right from "../../assets/arrow_right.svg";
import metamask from "../../assets/metamask2.svg";
import wallet from "../../assets/wallet.svg";

const Modal = ({ modalActive, setModalActive }) => {
	return (
		<div className={`modal-container ${modalActive ? "active" : ""}`}>
			<div className='overlay'></div>
			<div className='modal-box'>
				<div className='first d-flex '>
					<h1>Connect Wallet</h1>
					<p onClick={() => setModalActive(false)}>X</p>
				</div>
				<div className='second d-flex flex-column'>
					<p>Choose your preferred wallet:</p>
					<div className='link'>
						<div>
							<img src={metamask} alt='metamask' />
						</div>

						<div>
							<img src={arrow_right} alt='arrow' />
						</div>
					</div>
					<div className='link'>
						<div>
							<img src={wallet} alt='metamask' />
						</div>

						<div>
							<img src={arrow_right} alt='arrow' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
