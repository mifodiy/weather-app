import React, { useRef, useState } from 'react'
import {BiPlus} from 'react-icons/bi'
import './TripList.css'
import TripItem from '../TripItem/TripItem'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const TripList = ({openModal, trips, selectTrip, selectedTrip}) => {

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
				{trips.map((trip) => (
					<TripItem key={trip.id} tripData={trip} selectedTrip={selectedTrip} selectTrip={()=>selectTrip(trip)}/>
				))}
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