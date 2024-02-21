import React, { useEffect, useState } from 'react'
import { MdOutlineCheck } from "react-icons/md";
import './AddForm.css'
import { convertTimeToDateFormat } from '../../helpers/convertTimeToDateFormat';

const AddForm = ({cities, closeModal, addNewTrip}) => {
	const [selectedCity, setSelectedCity] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [isVerify, setIsVerify] = useState(false);
	const minDate = convertTimeToDateFormat(Date.now() + 24 * 60 * 60 * 1000);
	const maxDate = convertTimeToDateFormat(Date.now() + 15 * 24 * 60 * 60 * 1000);

	const handleSubmit = (e) =>{
		const chosenCity = cities.filter(city => city.id === +selectedCity)[0]
		const newTrip = {
			name: chosenCity.name,
			imageUrl: chosenCity.imageUrl,
			startDate: new Date(startDate).getTime(),
			endDate: new Date(endDate).getTime()
		}
		addNewTrip(newTrip)
		closeModal();
	}

	const handleSelectChange = (e) => {
		setSelectedCity(e.target.value)
	}

	const handleStartDateChange = (e) => {
		setStartDate(e.target.value)
	}

	const handleEndDateChange = (e) => {
		setEndDate(e.target.value)
	}

	useEffect(() => {
		setIsVerify(selectedCity && startDate && endDate)
	},[selectedCity, startDate, endDate])
	return (
		<>
			<form className='trip-form' id='trip-form' onSubmit={handleSubmit}>
				<label className='trip-form__label' htmlFor='city'>
					{!selectedCity ? <span className='trip-form__require'>*</span>
					: <MdOutlineCheck size={10} color={'green'}/> }{' '}
					City
				</label>
				<select 
					className='trip-form__input' 
					name='city' 
					id='city' 
					onChange={handleSelectChange}>
						<option>Please select a city</option>
						{cities.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
				</select>
				<label className='trip-form__label' htmlFor='startDate'>
					{!startDate ? <span className='trip-form__require'>*</span>
					: <MdOutlineCheck size={10} color={'green'}/> }{' '}
					Start date
				</label>
				<input 
					className='trip-form__input' 
					type='date' 
					name='startDate' 
					id='startDate' 
					min={minDate}
					max={maxDate}
					value={startDate}
					onChange={handleStartDateChange}/>
				<label className='trip-form__label' htmlFor='endDate'>
					{!endDate ? <span className='trip-form__require'>*</span>
					: <MdOutlineCheck size={10} color={'green'}/> }{' '}
					End date
				</label>
				<input 
					className='trip-form__input' 
					type='date' 
					name='endDate' 
					id='endDate'
					min={minDate}
					max={maxDate}
					value={endDate}
					onChange={handleEndDateChange}/>
			</form>
			<div className='trip-form__btns'>
				<button 
					className='trip-form__btn' 
					form='trip-form' 
					type='reset'
					onClick={closeModal}>Cansel</button>
				<button 
					className='trip-form__save trip-form__btn' 
					form='trip-form' 
					type='Submit'
					disabled={!isVerify}>Save</button>	
			</div>
		</>
	)
}

export default AddForm