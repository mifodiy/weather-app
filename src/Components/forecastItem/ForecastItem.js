import React from 'react'
import { weatherIcon } from '../../images/images';
import './ForecastItem.css'
import { getDayOfWeek } from '../../helpers/getDayOfWeek';

const ForecastItem = ({datetime, icon, tempmax, tempmin}) => {
	return (
		<div className='forecast__item'>
			<span className='forecast__day'>{getDayOfWeek(datetime)}</span>
			<img className='forecast__icon' src={weatherIcon[icon]} alt='icon'/>
			<div className='forecast__temperature'>
				{Math.round(tempmax)}/{Math.round(tempmin)}
			</div>
		</div>
	)
}

export default ForecastItem