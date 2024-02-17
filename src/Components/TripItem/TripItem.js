import React from 'react'
import './TripItem.css'

const TripItem = ({id, city, imageUrl}) => {
	return (
		<div className='trip__item'>
			<img className='trip__img' src={imageUrl} alt={city}/>
			<div className='trip__content'>
				<h2 className='trip__title'>
					{city}
				</h2>
				<div className='trip__date'>
					<span>22.05.2024</span> - <span>30.05.2024</span>
				</div>
			</div>
		</div>
	)
}

export default TripItem