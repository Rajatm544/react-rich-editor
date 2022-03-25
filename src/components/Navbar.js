import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
	return (
		<nav className='nav'>
			<ul>
				<li className='logoContainer'>
					<img className='logo' src='/logo.png' alt='logo' />
				</li>
				<li className='data'>
					<div>Data</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
