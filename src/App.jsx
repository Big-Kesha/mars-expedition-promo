import Promo from "./components/Promo/Promo";
import ModalReservation from "./components/ModalReservation/ModalReservation";
import { useState } from 'react';
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <Promo setIsModalOpen={setIsModalOpen}/>
      {
        isModalOpen &&
        <ModalReservation setIsModalOpen={setIsModalOpen}/>
      }
    </div>
  );
}

export default App;
