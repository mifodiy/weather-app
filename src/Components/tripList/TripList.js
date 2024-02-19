import React, { useRef, useState } from 'react'
import {BiPlus} from 'react-icons/bi'
import './TripList.css'
import TripItem from '../TripItem/TripItem'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const TripList = ({openModal}) => {
	const [trips, setTrips] = useState([{city: 'Kyiv', id:'1', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Odessa', id:'2', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Lviv', id:'3', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Lviv', id:'4', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'},
	{city: 'Lviv', id:'5', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708166794/view-Kiev-Ukraine_alunxg.jpg'}])

	const tripList = useRef(null)
	const [scrollLeft, setScrollLeft] = useState(0)
	const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

	const handleWheel = (e) => {
		const newScrollLeft = scrollLeft + e.deltaY*4;
		setScrollLeft(newScrollLeft)
		tripList.current.scrollLeft = newScrollLeft;
	}

	const handleScroll = () => {
		const atStart = tripList.current.scrollLeft === 0;
      const atEnd =
        Math.round(tripList.current.scrollLeft + tripList.current.clientWidth) >=
          tripList.current.scrollWidth - 20 &&
        Math.round(tripList.current.scrollLeft + tripList.current.clientWidth) <=
          tripList.current.scrollWidth;
      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
	}

	const handleScrollLeft = () => {
		const newScrollLeft = scrollLeft - 200;
		setScrollLeft(newScrollLeft)
		tripList.current.scrollLeft = newScrollLeft;
	}

	const handleScrollRight = () => {
		const newScrollLeft = scrollLeft + 200;
		setScrollLeft(newScrollLeft)
		tripList.current.scrollLeft = newScrollLeft;
	}
	return (
		<div className='trip__wrapper'>
			{trips.length > 3 && !isAtStart && (
				<button className='trip__btn trip__btn--left' onClick={handleScrollLeft}>
					<MdOutlineChevronLeft size={25} color='#fff'/>
				</button>
			)}
			<div className='trip__list' ref={tripList}
				onWheel={handleWheel}
				onScroll={handleScroll}>
				{trips.map(({id, city, imageUrl}) => <TripItem key={id} id={id} city={city} imageUrl={imageUrl}/>)}
				<div className='trip__add-btn' onClick={openModal}>
					<BiPlus size={20}/>
					<span>Add Trip</span>
				</div>
			</div>
			{trips.length > 3 && !isAtEnd && (
				<button className='trip__btn trip__btn--right' onClick={handleScrollRight}>
					<MdOutlineChevronRight size={25} color='#fff'/>
				</button>
			)}
		</div>
		
	)
}

export default TripList