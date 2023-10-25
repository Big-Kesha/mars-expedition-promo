import './Promo.css';
import marsLogo from '../../img/Mars.svg';
import topEllipse from '../../img/Ellipse 1.svg'
import horizontalLine from '../../img/Vector.svg'
import bottomEllipse from '../../img/Ellipse-bottom.svg'
// import background from '../../../src/img/sky-backround.jpg'

const Promo = ({setIsModalOpen}) => {

  return (
    <div className='promo'>
      <header className="header">
        <div className="logo">
          <img className='logo__image' src={marsLogo} alt="marsLogo" />
        </div>
        <div className="menu">
          <nav className='navigation'>
            <ul className="navigation__list">
              <li className='navigation__item'><a href="/#">О марсе</a></li>
              <li className='navigation__item'><a href="/#">Процесс</a></li>
              <li className='navigation__item'><a href="/#">Билеты</a></li>
              <li className='navigation__item'><a href="/#">Новости</a></li>
              <li className='navigation__item'><a href="/#">Контакты</a></li>
            </ul>
          </nav>
          <button 
            onClick={() => setIsModalOpen(true)}
            className='menu__button'
          >
            Купить билеты
          </button>
        </div>
      </header>
      <section className="content">
        <div className="decorators">
          <img className='decorators__top-ellipse' src={topEllipse} alt="ellipse" />
          <img className='decorators__vertical-vector' src={horizontalLine} alt="line" />
          <img className='decorators__bottom-ellipse' src={bottomEllipse} alt="ellipse" />
        </div>
        <div className="mission-name">
          <header className="mission-name__header">
            <h1 className='mission-name__title'>
              Точка назначения:
            </h1>
          </header>
          <div className="mission-name__content">
            МАРС
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;