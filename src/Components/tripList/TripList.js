import React, { useState } from 'react'
import {BiPlus} from 'react-icons/bi'
import './TripList.css'
import TripItem from '../TripItem/TripItem'

const TripList = () => {
	const [trips, setTrips] = useState([{city: 'Kyiv', id:'1', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Odessa', id:'2', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Lviv', id:'3', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Lviv', id:'3', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Lviv', id:'3', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'}])
	return (
		<div className='trip__list'>
			{trips.map(({id, city, imageUrl}) => <TripItem key={id} id={id} city={city} imageUrl={imageUrl}/>)}
			<div className='trip__btn'>
				<BiPlus size={20}/>
				<span>Add Trip</span>
			</div>
		</div>
	)
}

export default TripList