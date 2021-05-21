import React from 'react';
import { IWeatherDetails } from '../../common/interfaces/interfaces';
import { COUNT_MILISEC } from '../../common/components/constants';

interface IProps {
  dayData: IWeatherDetails | any
}

const WeatherCard: React.FC<IProps> = ({ dayData }) => {
  const monthes: Array<string> = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
  const currentDay: Date = new Date(dayData.dateTime * COUNT_MILISEC);
  const dateWithFormat: string = `${currentDay.getDate()} ${monthes[currentDay.getMonth()]} ${currentDay.getFullYear()}`;
  const temp: number = Math.ceil(dayData.temp);
  const altIcon: string = `${dayData.description} img`;
  const iconUrl: string = `http://openweathermap.org/img/wn/${dayData.icon}@4x.png`;
  return (
    <div className='card-container'>
      <div className='card-container__date'>{dateWithFormat}</div>
      <div className='card-container__img'>
        <img src={iconUrl} alt={altIcon} width='120'></img>
      </div>
      <div className='card-container__temp'>{temp}&#176;</div>
    </div>
  );
};

export default WeatherCard;
