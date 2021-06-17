import React, { useEffect, useState } from 'react';
import CitySelect from '../CitySelect/CitySelect';
import { API, CITY_COORDINATES, COUNT_MILISEC } from '../../common/components/constants';
import ErrorBlockSection from '../ErrorBlockSection/ErrorBlockSection';
import { IWeatherDetails } from '../../common/interfaces/interfaces';
import Datepicker from '../Datepicker/Datepicker';
import WeatherCard from '../WeatherCard/WeatherCard';

const PastForecast: React.FC = () => {
  const KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<IWeatherDetails>();
  const [date, setDate] = useState<number>();

  const changeCity = (returnCity: string): void => {
    setCity(returnCity.toLowerCase());
  };

  const changeDate = (returnDate: Date | string): void => {
    const newDate = new Date(returnDate).getTime();
    setDate(newDate / COUNT_MILISEC);
  };

  useEffect(() => {
    if (city && date) {
      const cityLat: number = CITY_COORDINATES[city].lat;
      const cityLon: number = CITY_COORDINATES[city].lon;
      const url = `${API}/data/2.5/onecall/timemachine?lat=${cityLat}&lon=${cityLon}&dt=${date}&units=metric&appid=${KEY}`;
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          if (data) {
            const details: IWeatherDetails = {
              dateTime: data.current.dt,
              temp: data.current.temp,
              icon: data.current.weather[0].icon,
              description: data.current.weather[0].main
            };
            setWeatherData(details);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [city, date]);

  return (
    <div className='forecast-container'>
      <div className='forecast-container__details'>
        <h1 className='forecast-container__title'>Forecast for a Date in the Past</h1>
        <div className="forecast-container__selects">
          <CitySelect changeCity={changeCity} />
          <Datepicker changeDate={changeDate} />
        </div>
      </div>
      <div className="forecast-container__card">
        {city === '' || !date || !weatherData ? <ErrorBlockSection errorText={'Fill in all the fields and the weather will be displayed'} /> : <WeatherCard dayData={weatherData} />}
      </div>
    </div>
  );
};

export default PastForecast;
