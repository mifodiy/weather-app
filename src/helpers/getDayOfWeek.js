export const getDayOfWeek = (date) => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return days[new Date(date).getDay()]
}