import { addZeroToNumber } from './addZeroToNumber';

export const getTimeToTimer = (startDate) => {
	const difference = new Date(startDate) - Date.now();
	if(difference <= 0) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}
	const days = addZeroToNumber(Math.floor(difference / 1000 / 60 / 60 / 24))
	const hours = addZeroToNumber(Math.floor((difference / 1000 / 60 / 60) % 24))
	const minutes = addZeroToNumber(Math.floor((difference / 1000 / 60) % 60))
	const seconds = addZeroToNumber(Math.floor((difference / 1000) % 60))

	return {
		days,
		hours,
		minutes,
		seconds
	}
}