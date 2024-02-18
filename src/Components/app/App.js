import ForecastCard from '../forecastCard/ForecastCard';
import ForecastList from '../forecastList/ForecastList';
import Header from '../header/Header';
import Search from '../search/Search';
import TripList from '../tripList/TripList';
import Modal from '../modal/Modal';
import './App.css';
import { useState } from 'react';
import AddForm from '../addForm/AddForm';
import { MdClose } from "react-icons/md";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Header/>
    <main className='main'>
      <Search/>
      <TripList openModal={toggleModal}/>
      <ForecastList/>
    </main>
    <ForecastCard/>
    {isOpen && (
      <Modal onClick={toggleModal}>
        <header className='modal__header'>
          <h2 className='modal__title'>Create trip</h2>
          <button onClick={toggleModal}><MdClose size={20} /></button>
        </header>
        
        <AddForm/>
      </Modal>
    )}
    </>
  );
}

export default App;
