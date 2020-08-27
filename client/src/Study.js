import React from 'react';
import Navbar from './Navbar';
import './Study.css';

const Study = () => {
	return (
		<div>
			<Navbar />
			<div className='study'>
				<h4>What would you like to do?</h4>
				<div className='study-selection'>
					<a href='/add' className='btn btn-danger select-btn'><span className='add-btn'>Add</span> <i className="fa fa-plus"></i></a>
					<a href='/subtract' className='btn btn-info select-btn'><span className="subtract-btn">Subtract</span><i className="fa fa-minus"></i></a>
					<a href='/multiply' className='btn btn-secondary select-btn'><span className="multiply-btn">Multiply</span><i className="fa fa-times"></i></a>
					<a href='/divide' className='btn btn-warning select-btn'><span className="divide-btn">Divide</span> <i className="fa fa-percent"></i></a>
				</div>
			</div>
		</div>
	);
};

export default Study;
