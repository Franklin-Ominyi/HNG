import React from "react";
import { Link } from "react-router-dom/dist";
import "./ListLinks.css";

const ListLinks = () => {
	return (
		<div className='list-links content'>
			<a
				id='btn_zuri'
				href='https://twitter.com/franklin_ominyi'
				target='_blank'
				rel='noreferrer'
				className='item'
			>
				Twitter Link
			</a>
			<a
				id='btn_zuri'
				href='https://training.zuri.team/'
				target='_blank'
				rel='noreferrer'
				className='item'
			>
				Zuri Team
			</a>
			<a
				id='books'
				href='http://books.zuri.team/'
				target='_blank'
				rel='noreferrer'
				className='item'
			>
				Zuri Books
			</a>
			<a
				id='book__python'
				href='https://books.zuri.team/python-for-beginners?ref_id=chitech/'
				target='_blank'
				rel='noreferrer'
				className='item'
			>
				Python Books
			</a>
			<a
				id='pitch'
				href='https://background.zuri.team/'
				target='_blank'
				rel='noreferrer'
				className='item'
			>
				Background Check for Coders
			</a>
			<a
				id='book__design'
				href='https://books.zuri.team/design-rules'
				target='_blank'
				rel='noreferrer'
				className='item'
			>
				Design Book
			</a>
			<Link to='/contact' id='contact' className='item'>
				Contact Me
			</Link>
		</div>
	);
};

export default ListLinks;
