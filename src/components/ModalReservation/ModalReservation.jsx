import React from 'react';
import './ModalReservation.css'
import closeIcon from '../../img/close.png'

const ModalReservation = ({setIsModalOpen}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    console.log('отправка формы');
  }

  return (
    <div className='modal'>
      <header className='modal-header modal-wrapper'>
        <h1 className='modal-header__title'>
          Бронирование билетов
        </h1>
        <button onClick={() => setIsModalOpen(false)} className='modal-header__close-button'>
          <img src={closeIcon} alt="Закрыть форму" />
        </button>
      </header>

      <main className='modal-body'>
        <form className='modal-form modal-wrapper' onSubmit={(e) => handleSubmit(e)}>
          <div className="modal-form__data-group">
            <div className="modal-form__input-group">
              <label className='modal-form__label' htmlFor="arrivalDate">Время заезда</label>
              <input className='modal-form__input' type="text" id='arrivalDate'/>
            </div>

            <div className="modal-form__input-group">
              <label className='modal-form__label' htmlFor="leavingDate">Время отъезда</label>
              <input className='modal-form__input' type="text" id='leavingDate'/>
            </div>

            <div className="modal-form__input-group">
              <label className='modal-form__label' htmlFor="amount">Количество</label>
              <input className='modal-form__input' type="text" id='amount'/>
            </div>
          </div>

          <div className="modal-form__submit-group">
            <input className='modal-form__input_submit' type="submit" value="Купить билеты"/>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ModalReservation;