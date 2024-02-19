import React, { useEffect, useState } from 'react'
import './Timer.css'
import { getTimeToTimer } from '../../helpers/getTimeToTimer'

const Timer = ({startDate}) => {
	const [time, setTime] = useState(getTimeToTimer(startDate));
	const {days, hours, minutes, seconds} = time;
	const [isTripStarted, setIsTripStarted] = useState(false);
	const isTimeExist = !days && !hours && !minutes && !seconds;

	useEffect(() => {
		if(!isTimeExist) {
			setIsTripStarted(false)
		} else {
			setIsTripStarted(true)
		}
	}, [isTimeExist])

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(getTimeToTimer(startDate))
		},1000)

		return () => clearInterval(timer)
	}, [startDate])

	return (
		<div className='timer'>{
			isTripStarted ? (
				<div className='timer__message'>Your trip has already begun</div>
			) : (
				<ul className='timer__list'>
					<li className='timer__item'>
						<span className='timer__num'>{days}</span>
						<span className='timer__label'>Days</span>
					</li>
					<li className='timer__item'>
						<span className='timer__num'>{hours}</span>
						<span className='timer__label'>Hours</span>
					</li>
					<li className='timer__item'>
						<span className='timer__num'>{minutes}</span>
						<span className='timer__label'>Minutes</span>
					</li>
					<li className='timer__item'>
						<span className='timer__num'>{seconds}</span>
						<span className='timer__label'>Seconds</span>
					</li>
				</ul>
			)
		}	
		</div>
	)
}

export default Timer