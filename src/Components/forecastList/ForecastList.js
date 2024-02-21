import React, { useState, useRef } from 'react'
import ForecastItem from '../forecastItem/ForecastItem'
import './ForecastList.css'

const ForecastList = ({forecast}) => {

	const forecastList = useRef(null)
	const [scrollLeft, setScrollLeft] = useState(0)

	const handleWheel = (e) => {
		const newScrollLeft = scrollLeft + e.deltaY*4;
		setScrollLeft(newScrollLeft)
		forecastList.current.scrollLeft = newScrollLeft;
	}
	return (
		<div>
			<h2 className='forecast__title'>Week</h2>
			<div className='forecast__list' ref={forecastList}
				onWheel={handleWheel}>
				{forecast.map(({datetime, icon, tempmax, tempmin}) => <ForecastItem key={datetime} datetime={datetime} icon={icon} tempmax={tempmax} tempmin={tempmin}/>)}
			</div>
		</div>
	)
}

export default ForecastList