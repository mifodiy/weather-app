import ForecastCard from '../forecastCard/ForecastCard';
import ForecastList from '../forecastList/ForecastList';
import Header from '../header/Header';
import Search from '../search/Search';
import TripList from '../tripList/TripList';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Search/>
      <TripList/>
      <ForecastList/>
    </main>
    <ForecastCard/>
    </>
  );
}

export default App;
