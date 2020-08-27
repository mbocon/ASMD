import React, { useState, Fragment } from 'react';
import Navbar from './Navbar';
import './Add.css';

const Add = (props) => {
	const [showBtn, setShowBtn] = useState(false);
	const [range, setRange] = useState([]);
	const [showAns, setShowAns] = useState(false);
	const [theIndex, setTheIndex] = useState(-1);

	const gridArr = [];

	for (let i = 0; i < 100; i++) {
		gridArr.push(i);
	}

	const randColorRGB = () => {
		const red = Math.floor(Math.random() * 255);
		const green = Math.floor(Math.random() * 255);
		const blue = Math.floor(Math.random() * 255);
		return `rgb(${red}, ${green}, ${blue})`;
	};

	const selectedRange = range => {
		let arr = [];
		let min = Math.ceil(range - 10);
		let max = Math.floor(range);
		for (let i = 0; i < 100; i++) {
			let first = Math.floor(Math.random() * (max - min) + min);
			let second = Math.floor(Math.random() * (max - min) + min);
			arr.push(first, second);
		}
		setRange(arr);
	};

	const toggleRangeBtn = (e, range) => {
		selectedRange(range);
		setShowBtn(!showBtn);
	};

	const toggleAns = (e, i) => {
		if (i === theIndex) {
			setTheIndex(-1);
		} else if (i !== theIndex) {
			setTheIndex(i);
		}
		setShowAns(!showAns);
	};

	return (
		<div>
			<Navbar />

			<div className='range-grid'>
				<button
					className={showBtn === false ? 'display btn btn-warning range-btn' : 'hidden btn btn-warning'}
					onClick={e => toggleRangeBtn(e)}>
					Select Range
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 10)}>
					0 - 10
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 20)}>
					10 - 20
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 30)}>
					20 - 30
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 40)}>
					30 - 40
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 50)}>
					40 - 50
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 60)}>
					50 - 60
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 70)}>
					60 - 70
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 80)}>
					70 - 80
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 90)}>
					80 - 90
				</button>
				<button
					className={showBtn === false ? 'hidden btn btn-warning' : 'display btn btn-warning range-btn'}
					onClick={e => toggleRangeBtn(e, 100)}>
					90 - 100
				</button>
			</div>
			<div className='add'>
				<h4>Click one to see the answer!</h4>
			</div>
			<div className='grid'>
				{gridArr.map(i => {
					return (
						<Fragment>
							{theIndex !== i ? (
								<div key={i} className='grid-box' style={{ backgroundColor: '#ffce67' }} onClick={e => toggleAns(e, i)}>
									<span>
										{range[i]} / {range[i + 1]}
									</span>
								</div>
							) : (
								<span className={i === theIndex ? 'showAns' : 'hidden'} onClick={e => toggleAns(e, i)}>
									{range[i] / range[i + 1]}
								</span>
							)}
						</Fragment>
					);
				})}
            </div>
            <div className='else'>
				<button className='btn btn-primary' onClick={()=>props.history.push('/study')}>Study something else</button>
			</div>
		</div>
	);
};

export default Add;
