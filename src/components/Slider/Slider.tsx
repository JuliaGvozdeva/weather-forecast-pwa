import React, { useState } from 'react';
import arrow from '../../assets/images/icons/chevron-left.png';
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
    setCurrentStartItem(currentStartItem - 1);
  };

  const handleClickNext = () => {
    setCurrentStartItem(currentStartItem + 1);
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
          {
            currentStartItem !== 0
              ? <img className='slider-container__btn-prev' src={arrow} alt='slider arrow' onClick={handleClickPrev} />
              : null
          }
        </div>
        <div className='slider-container__card-list'>
          {getCardsList(currentStartItem)}
        </div>
        <div className="slider-container__btn">
          {
            currentStartItem !== maxUpdateCardCurent
              ? <img className='slider-container__btn-next' src={arrow} alt='slider arrow' onClick={handleClickNext} />
              : null
          }
        </div>
      </section>
    );
  } else {
    return <EmptyBlockSection />;
  }
};

export default Slider;
