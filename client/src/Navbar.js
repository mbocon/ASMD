import React from 'react';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<a className='navbar-brand' href='/'>
				ASMD
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarColor01'
				aria-controls='navbarColor01'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarColor01'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<a className='nav-link' href='/study'>
							Study
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/test'>
							Test
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='https://www.mikebocon.com' target="_blank" rel="noopener noreferrer">
							Meet the Developer?
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
