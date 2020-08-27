import React, { useState, Fragment } from 'react';
import Navbar from './Navbar';
import './Add.css';

const Add = props => {
	const [showBtn, setShowBtn] = useState(false);
	const [range, setRange] = useState([]);
	const [showAns, setShowAns] = useState(false);
	const [theIndex, setTheIndex] = useState(-1);
	const [showForm, setShowForm] = useState(false);
	let [low, setLow] = useState('');
	let [high, setHigh] = useState('');

	const gridArr = [];

	for (let i = 0; i < 100; i++) {
		gridArr.push(i);
	}

	const selectedRange = range => {
		let arr = [];
		let min = Math.ceil(range - 10);
		let max = Math.floor(range);
		for (let i = 0; i < 100; i++) {
			let first = Math.floor(Math.random() * (max - min) + min);
			let second = Math.floor(Math.random() * (max - min) + min);
			arr.push(first, second + 1);
		}
		setRange(arr);
	};

	const toggleRangeBtn = (e, range) => {
		selectedRange(range);
		setShowBtn(!showBtn);
	};

	const makeCustomRange = e => {
		setRange([]);
		setShowForm(!showForm);
	};

	const toggleAns = (e, i) => {
		if (i === theIndex) {
			setTheIndex(-1);
		} else if (i !== theIndex) {
			setTheIndex(i);
		}
		setShowAns(!showAns);
	};

	const handleChange = e => {
		console.log(e.target.id);
		if (e.target.id === 'customRange1') setLow(e.target.value);
		if (e.target.id === 'customRange2') setHigh(e.target.value);
		console.log(low, high);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let arr = [];
		let min = Math.ceil(low);
		let max = Math.floor(high);
		for (let i = 0; i < 100; i++) {
			let first = Math.floor(Math.random() * (max - min) + min);
			let second = Math.floor(Math.random() * (max - min) + min);
			arr.push(first, second + 1);
		}
		setRange(arr);
		setShowForm(!showForm);
		setShowBtn(!showBtn);
	};

	return (
		<div>
			<Navbar />

			<div className='range-grid'>
				{showForm === false ? (
					<Fragment>
						<button
							className={showBtn === false ? 'display btn btn-danger range-btn' : 'hidden btn btn-danger'}
							onClick={e => toggleRangeBtn(e)}>
							Select Range
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 10)}>
							0 - 10
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 20)}>
							10 - 20
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 30)}>
							20 - 30
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 40)}>
							30 - 40
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 50)}>
							40 - 50
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 60)}>
							50 - 60
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 70)}>
							60 - 70
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 80)}>
							70 - 80
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 90)}>
							80 - 90
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => toggleRangeBtn(e, 100)}>
							90 - 100
						</button>
						<button
							className={showBtn === false ? 'hidden btn btn-danger' : 'display btn btn-danger range-btn'}
							onClick={e => makeCustomRange(e)}>
							Custom
						</button>
					</Fragment>
				) : (
					<div>
						<h4>Set Custom Range</h4>
						<form className='custom-form' onSubmit={e => handleSubmit(e)}>
							<label htmlFor='customRange1'></label>
							Between
							<input type='text' id='customRange1' placeholder='Enter a number' onChange={handleChange} />
							<label htmlFor='customRange2'></label>
							And
							<input type='text' id='customRange2' placeholder='Enter a number' onChange={handleChange} />
							<button className='btn btn-primary custom-range-submit-btn'>Submit</button>
						</form>
					</div>
				)}
			</div>
			<div className='add'>
				<h3>Addition flashcards</h3>
				{range.length ? (
					<div>
						<h5>Click one to see the answer!</h5>
						<button className='btn btn-primary' onClick={() => props.history.push('/study')}>
							Study something else
						</button>
					</div>
				) : (
					<h5>Select a range to get started</h5>
				)}
			</div>
			{range.length ? (
				<div className='grid'>
					{gridArr.map(i => {
						return (
							<Fragment key={i}>
								{theIndex !== i ? (
									<div className='grid-box' style={{ backgroundColor: '#FF5A2B' }} onClick={e => toggleAns(e, i)}>
										<span>
											{range[i]} + {range[i + 1]}
										</span>
									</div>
								) : (
									<span className={i === theIndex ? 'showAns' : 'hidden'} onClick={e => toggleAns(e, i)}>
										{range[i] + range[i + 1]}
									</span>
								)}
							</Fragment>
						);
					})}
				</div>
			) : null}
			<div className='else'>
				<button className='btn btn-primary' onClick={() => props.history.push('/study')}>
					Study something else
				</button>
			</div>
		</div>
	);
};

export default Add;
