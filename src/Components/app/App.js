import ForecastCard from '../forecastCard/ForecastCard';
import ForecastList from '../forecastList/ForecastList';
import Header from '../header/Header';
import Search from '../search/Search';
import TripList from '../tripList/TripList';
import Modal from '../modal/Modal';
import './App.css';
import { useEffect, useState } from 'react';
import AddForm from '../addForm/AddForm';
import { MdClose } from "react-icons/md";
import cities from "../../cities.json"
import { nanoid } from 'nanoid';
import { getForecastByDay, getForecastByDays } from '../../api/weatherAPI';

const defaultTrip = {id: 1, name: 'London', imageUrl: 'https://res.cloudinary.com/diasihr5q/image/upload/v1708426643/london.jpg', startDate: 1708560000000, endDate: 1708660000000}
const savedTrips = JSON.parse(localStorage.getItem('trips'));

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [trips, setTrips] = useState(() => {return savedTrips ? [...savedTrips] : [defaultTrip]});
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [forecastList, setForecastList] = useState(null);
  const [todayForecast, setTodayForecast] = useState(null);
  const [search, setSearch] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSelectedTrip(null);
    setForecastList(null);
    setSearch('');
  }

  const addNewTrip = (newTrip) => {
    newTrip.id = nanoid();
    setTrips([...trips, newTrip].sort((prevTrip, nextTrip) => prevTrip.startDate - nextTrip.startDate))
    localStorage.setItem('trips', JSON.stringify([...trips, newTrip].sort((prevTrip, nextTrip) => prevTrip.startDate - nextTrip.startDate)))
  }

  const handleSelectTrip = (trip) => {
    setSelectedTrip(trip)
  }

  const handleSearchChange = (e) => {
    setSearch(e.currentTarget.value);
    setSelectedTrip(null);
    setForecastList(null);
  }

  const getFilteredTrips = () => {
    if(search) {
      return trips.filter(trip => (
        trip.name.toLowerCase().includes(search.toLowerCase()) 
      ))
    }

    return trips
  }

  useEffect(() => {
    if(!selectedTrip) return;
    
    getForecastByDay(selectedTrip).then(res=> setTodayForecast(res))
    getForecastByDays(selectedTrip).then(res=> setForecastList(res.days))
  }, [selectedTrip])

  return (
    <>
    <Header/>
    <main className='main'>
      <Search value={search} onChange={handleSearchChange}/>
      <TripList openModal={toggleModal} trips={getFilteredTrips().sort(
                (prevTrip, nextTrip) => prevTrip.startDate - nextTrip.startDate
              )} selectTrip={handleSelectTrip} selectedTrip={selectedTrip}/>
      {selectedTrip && forecastList && 
      <ForecastList forecast={forecastList}/>}
    
    </main>
    <ForecastCard todayForecast={todayForecast} selectedTrip={selectedTrip}/>
    {isOpen && (
      <Modal onClick={toggleModal}>
        <header className='modal__header'>
          <h2 className='modal__title'>Create trip</h2>
          <button onClick={toggleModal}><MdClose size={20} /></button>
        </header>
        
        <AddForm cities={cities} closeModal={toggleModal} addNewTrip={addNewTrip}/>
      </Modal>
    )}
    </>
  );
}

export default App;
