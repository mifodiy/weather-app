export const convertTimeToDateFormat = (time, format) => {
	const date = new Date(time);
	const year = date.getFullYear();
	const month = String((date.getMonth() + 1)).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0')

	return format === 'points' ? `${day}.${month}.${year}` : `${year}-${month}-${day}`
}