import React from 'react'
import {convertTimeToDateFormat} from '../../helpers/convertTimeToDateFormat'
import './TripItem.css'

const TripItem = ({id, name, imageUrl, startDate, endDate}) => {
	return (
		<div className='trip__item'>
			<img className='trip__img' src={imageUrl} alt={name}/>
			<div className='trip__content'>
				<h2 className='trip__title'>
					{name}
				</h2>
				<div className='trip__date'>
					<span>{convertTimeToDateFormat(startDate, 'points')}</span> - <span>{convertTimeToDateFormat(endDate, 'points')}</span>
				</div>
			</div>
		</div>
	)
}

export default TripItem