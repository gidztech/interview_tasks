import React, { useState } from 'react';
import  { Moment } from 'moment';
import Calendar, { earliestDeliveryDate } from './components/Calendar/Calendar';
import ChooseYourDelivery from './components/ChooseYourDelivery/ChooseYourDelivery';
import Modal from './components/Modal/Modal';
import './App.sass';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Moment | null>(earliestDeliveryDate);

  const handleOnDateChange = (date: Moment | null) => {
    setDate(date);
    toggleModal()
  };

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className="App">
      {!isOpen && <ChooseYourDelivery date={date} onClick={toggleModal} />}

      <Modal isOpen={isOpen}>
        <Calendar initialDate={date} onChange={handleOnDateChange} onCancel={toggleModal} />
      </Modal>

     </div>
  );
}
 



export default App
