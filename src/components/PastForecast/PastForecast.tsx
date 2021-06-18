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
  const [pastWeatherData, setPastWeatherData] = useState<IWeatherDetails>();
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
          return false;
        })
        .then((pastDayData) => {
          if (pastDayData) {
            const weatherDetails: IWeatherDetails = {
              dateTime: pastDayData.current.dt,
              temp: pastDayData.current.temp,
              icon: pastDayData.current.weather[0].icon,
              description: pastDayData.current.weather[0].main,
            };
            setPastWeatherData(weatherDetails);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [city, date]);

  return (
    <section className="forecast-container">
      <div className="forecast-container__details">
        <h2 className="forecast-container__title">Forecast for a Date in the Past</h2>
        <div className="forecast-container__selects">
          <CitySelect changeCity={changeCity} />
          <Datepicker changeDate={changeDate} />
        </div>
      </div>
      <div className="forecast-container__card">
        {city === '' || !date || !pastWeatherData ? <ErrorBlockSection errorText="Fill in all the fields and the weather will be displayed" /> : <WeatherCard dayData={pastWeatherData} />}
      </div>
    </section>
  );
};

export default PastForecast;
