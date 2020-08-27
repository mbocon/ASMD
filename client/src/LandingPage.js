import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar';

function LandingPage() {
	return (
		<div>
			<Navbar />
      <div className='landingPage'>
      <h1 className='welcome-h1'>Welcome to</h1>
				<h1 className='asmd-h1'>
					A<span className='landing-info'>dd</span> S<span className='landing-info'>ubtract</span> M<span className='landing-info'>ultiply</span> D<span className='landing-info'>ivide</span>
        </h1>
        <h4 className='landing-h4'>A place where your child (or you) can practice basic math skills!</h4>
        <a href="/study" className='btn btn-primary'>Get Started!</a>
			</div>
		</div>
	);
}

export default LandingPage;
