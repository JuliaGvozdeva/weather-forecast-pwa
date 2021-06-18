import React from 'react';
import { IWeatherDetails } from '../../common/interfaces/interfaces';
import { COUNT_MILISEC } from '../../common/components/constants';

interface IProps {
  dayData: IWeatherDetails
}

const WeatherCard: React.FC<IProps> = ({ dayData }: IProps) => {
  const currentDay: string = new Date(dayData.dateTime * COUNT_MILISEC).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).toLowerCase();
  const temp: number = Math.ceil(dayData.temp);
  const altIcon = `${dayData.description} img`;
  const iconUrl = `http://openweathermap.org/img/wn/${dayData.icon}@4x.png`;

  return (
    <div className="card-container">
      <div className="card-container__date">{currentDay}</div>
      <div className="card-container__img">
        <img src={iconUrl} alt={altIcon} width="120" />
      </div>
      <div className="card-container__temp">
        {temp}
        &#176;
      </div>
    </div>
  );
};

export default WeatherCard;
