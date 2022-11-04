import React from "react";
import { Footer } from "../../components/footer";
import "./ContactMe.css";

export const ContactMe = () => {
	return (
		<>
			<div className='contact-me  content'>
				<div className='title-container'>
					<h1>Contact Me</h1>
					<p>Hi there, contact me to ask me about anything you have in mind.</p>
				</div>
				<div className='forms'>
					<div className='first'>
						<div className='input-container'>
							<label htmlFor='first_name'>First name</label>
							<input
								type='text'
								name='firstname'
								id='first_name'
								placeholder='Enter your first name'
								aria-label='First name'
							/>
						</div>
						<div className='input-container'>
							<label htmlFor='last_name'>Last name</label>
							<input
								type='text'
								name='lastname'
								id='last_name'
								placeholder='Enter your last name'
								aria-label='Last name'
							/>
						</div>
					</div>
					<div className='input-container'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='yourname@email.com'
						/>
					</div>
					<div className='input-container'>
						<label htmlFor='message'>Message</label>
						<textarea
							name='message'
							cols='30'
							rows='10'
							id='message'
							placeholder="Send me a message and I'll reply you as soon as possible..."
						></textarea>
					</div>
					<div className='checkbox-container'>
						<input type='checkbox' name='agree' />
						<p>You agree to providing your data to {`{name}`} who may contact you.</p>
					</div>
					<div>
						<button id='btn__submit'>Send message</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
