import React from 'react';
import arrow from '../../assets/images/icons/chevron-left.png';
import { COUNT_CARDS_WEB } from '../../common/components/constants';
import WeatherCard from '../WeatherCard/WeatherCard';
import { IWeatherDetails, IWeatherDetailsList } from '../../common/interfaces/interfaces';
import EmptyBlockSection from '../EmptyBlockSection/EmptyBlockSection';

interface IProps {
  weatherData: Array<IWeatherDetailsList> | []
}

const Slider: React.FC<IProps> = ({ weatherData }) => {
  if (weatherData.length !== 0) {
    return (
      <section className='slider-container'>
        <div className="slider-container__btn">
          <img className='slider-container__btn-prev' src={arrow} alt='slider arrow' />
        </div>
        <div className='slider-container__card-list'>
          {weatherData.map((day: IWeatherDetails | any, idx: number) => {
            return idx < COUNT_CARDS_WEB ? <WeatherCard key={idx} dayData={day} /> : null;
          })}
        </div>
        <div className="slider-container__btn">
          <img className='slider-container__btn-next' src={arrow} alt='slider arrow' />
        </div>
      </section>
    );
  } else {
    return <EmptyBlockSection />;
  }
};

export default Slider;
