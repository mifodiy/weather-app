import React, { useState } from 'react'
import { MdOutlineCheck } from "react-icons/md";
import './AddForm.css'

const AddForm = () => {
	const [selectedCity, setSelectedCity] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	}
	return (
		<>
			<form className='trip-form' id='trip-form' onSubmit={handleSubmit}>
				<label className='trip-form__label' htmlFor='city'>
					{!selectedCity ? <span className='trip-form__require'>*</span>
					: <MdOutlineCheck size={10} color={'green'}/> }{' '}
					City
				</label>
				<select className='trip-form__input' name='city'>
					<option>Please select a city</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
				<label className='trip-form__label' htmlFor='startDate'>
					{!selectedCity ? <span className='trip-form__require'>*</span>
					: <MdOutlineCheck size={10} color={'green'}/> }{' '}
					Start date
				</label>
				<input className='trip-form__input' type='date' name='startDate' placeholder='Select date'/>
				<label className='trip-form__label' htmlFor='endDate'>
					{!selectedCity ? <span className='trip-form__require'>*</span>
					: <MdOutlineCheck size={10} color={'green'}/> }{' '}
					End date
				</label>
				<input className='trip-form__input' type='date' name='endDate' placeholder='Select date'/>
			</form>
			<div className='trip-form__btns'>
				<button className='trip-form__btn' form='trip-form' type='reset'>Cansel</button>
				<button className='trip-form__save trip-form__btn' form='trip-form' type='Submit'>Save</button>	
			</div>
		</>
	)
}

export default AddForm