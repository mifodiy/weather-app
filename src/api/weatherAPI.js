import axios from 'axios';
import { convertTimeToDateFormat } from '../helpers/convertTimeToDateFormat';

axios.defaults.baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_TOKEN = 'LJ43LS8JX3BCARW5ML6MZ2BBT';

export const getForecastByDays = async(trip) => {
	try {
		const request = await axios.get(`${trip.name}/${convertTimeToDateFormat(trip.startDate)}/${convertTimeToDateFormat(trip.endDate)}?unitGroup=metric&include=days&key=${API_TOKEN}&contentType=json`)

		return request.data
	}catch(error) {
		throw error;
	}
}

export const getForecastByDay = async(trip) => {
	try {
		const request = await axios.get(`${trip.name}/today?unitGroup=metric&include=days&key=${API_TOKEN}&contentType=json`)

		return request.data
	}catch(error) {
		throw error;
	}
}