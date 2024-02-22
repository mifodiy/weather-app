import React from 'react'
import './ForecastCard.css'
import { weatherIcon } from '../../images/images'
import Timer from '../timer/Timer'
import { getDayOfWeek } from '../../helpers/getDayOfWeek'
import { convertTimeToDateFormat } from '../../helpers/convertTimeToDateFormat'

const ForecastCard = ({todayForecast, selectedTrip}) => {
	
	return (
		<aside className='forecast-card'>
			<div className='forecast-card__content'>
				{selectedTrip && todayForecast ? (
					<>
					<div className='forecast-card__day'>{getDayOfWeek(todayForecast.days[0].datetime)}</div>
					<div className='forecast-card__info'>
						<img className='forecast-card__img' src={weatherIcon[todayForecast.days[0].icon]} alt={todayForecast.days[0].icon}/>
						<div className='forecast-card__temperature'>{Math.round(todayForecast.days[0].temp)}</div>
					</div>
					<div className='forecast-card__city'>{todayForecast.address}</div>
					</>
				) : (
					<div className='forecast-card__message'>Select the trip</div>
				)}
			</div>
			{selectedTrip && <Timer startDate={convertTimeToDateFormat(selectedTrip.startDate)}/>}
		</aside>
	)
}

export default ForecastCard