import React, { useState } from 'react'
import './ForecastCard.css'
import { weatherIcon } from '../../images/images'
import Timer from '../timer/Timer'

const ForecastCard = () => {
	const [forecast, setForecast] = useState(
    {
			"queryCost": 1,
			"latitude": 50.4506,
			"longitude": 30.5243,
			"resolvedAddress": "Київ, Україна",
			"address": "kyiv",
			"timezone": "Europe/Kiev",
			"tzoffset": 2.0,
			"days": [
				{
					"datetime": "2024-02-17",
					"datetimeEpoch": 1708120800,
					"tempmax": 2.7,
					"tempmin": -0.1,
					"temp": 1.2,
					"feelslikemax": 0.6,
					"feelslikemin": -2.6,
					"feelslike": -1.2,
					"dew": -0.4,
					"humidity": 89.3,
					"precip": 0.0,
					"precipprob": 71.0,
					"precipcover": 0.0,
					"preciptype": [
						"rain",
						"snow"
					],
					"snow": 0.0,
					"snowdepth": 0.0,
					"windgust": 27.7,
					"windspeed": 10.8,
					"winddir": 176.9,
					"pressure": 1027.5,
					"cloudcover": 96.7,
					"visibility": 24.1,
					"solarradiation": 101.9,
					"solarenergy": 8.9,
					"uvindex": 4.0,
					"severerisk": 10.0,
					"sunrise": "07:06:58",
					"sunriseEpoch": 1708146418,
					"sunset": "17:17:47",
					"sunsetEpoch": 1708183067,
					"moonphase": 0.26,
					"conditions": "Snow, Rain, Overcast",
					"description": "Cloudy skies throughout the day with a chance of rain or snow.",
					"icon": "rain",
					"stations": [
						"remote"
					],
					"source": "comb"
				}
			]
		}
  )
	return (
		<aside className='forecast-card'>
			<div className='forecast-card__content'>
				<div className='forecast-card__day'>{forecast.days[0].datetime}</div>
				<div className='forecast-card__info'>
					<img className='forecast-card__img' src={weatherIcon[forecast.days[0].icon]} alt={forecast.days[0].icon}/>
					<div className='forecast-card__temperature'>{Math.round(forecast.days[0].temp)}</div>
				</div>
				<div className='forecast-card__city'>{forecast.address}</div>
			</div>
			<Timer/>
		</aside>
	)
}

export default ForecastCard