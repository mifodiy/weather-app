import React from 'react'
import './Timer.css'

const Timer = () => {

	return (
		<ul className='timer'>
			<li className='timer__item'>
				<span className='timer__num'>01</span>
				<span className='timer__label'>Days</span>
			</li>
			<li className='timer__item'>
				<span className='timer__num'>01</span>
				<span className='timer__label'>Hours</span>
			</li>
			<li className='timer__item'>
				<span className='timer__num'>01</span>
				<span className='timer__label'>Minutes</span>
			</li>
			<li className='timer__item'>
				<span className='timer__num'>01</span>
				<span className='timer__label'>Seconds</span>
			</li>
		</ul>
	)
}

export default Timer