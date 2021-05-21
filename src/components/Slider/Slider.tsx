import React, { useState } from 'react';
import arrowActive from '../../assets/images/icons/chevron-left-active.png';
import arrowDisabled from '../../assets/images/icons/chevron-left-disabled.png';
import { COUNT_CARDS_WEB, COUNT_WEATHER_CARDS_ALL } from '../../common/components/constants';
import WeatherCard from '../WeatherCard/WeatherCard';
import { IWeatherDetailsList } from '../../common/interfaces/interfaces';
import EmptyBlockSection from '../EmptyBlockSection/EmptyBlockSection';

interface IProps {
  weatherData: Array<IWeatherDetailsList> | []
}

const Slider: React.FC<IProps> = ({ weatherData }) => {
  const [currentStartItem, setCurrentStartItem] = useState<number>(0);
  const maxUpdateCardCurent = COUNT_WEATHER_CARDS_ALL - COUNT_CARDS_WEB;

  const handleClickPrev = () => {
    if (currentStartItem !== 0) {
      setCurrentStartItem(currentStartItem - 1);
    }
  };

  const handleClickNext = () => {
    if (currentStartItem !== maxUpdateCardCurent) {
      setCurrentStartItem(currentStartItem + 1);
    }
  };

  const getCardsList = (currentStart: number) => {
    let listOfWeatherCards = [];
    const endCardIdx: number = currentStartItem + COUNT_CARDS_WEB;

    for (let i = currentStart; i < endCardIdx; i++) {
      listOfWeatherCards.push(<WeatherCard key={i} dayData={weatherData[i]} />);
    }

    return listOfWeatherCards;
  };

  if (weatherData.length !== 0) {
    return (
      <section className='slider-container'>
        <div className="slider-container__btn">
          <img className='slider-container__btn-prev' src={currentStartItem !== 0 ? arrowActive : arrowDisabled} alt='slider arrow' onClick={handleClickPrev} />
        </div>
        <div className='slider-container__card-list'>
          {getCardsList(currentStartItem)}
        </div>
        <div className="slider-container__btn">
          <img className='slider-container__btn-next' src={currentStartItem !== maxUpdateCardCurent ? arrowActive : arrowDisabled} alt='slider arrow' onClick={handleClickNext} />
        </div>
      </section>
    );
  } else {
    return <EmptyBlockSection />;
  }
};

export default Slider;
