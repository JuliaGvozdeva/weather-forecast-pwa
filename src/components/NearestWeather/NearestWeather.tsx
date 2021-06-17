import React, { useEffect, useState } from 'react';
import CitySelect from '../CitySelect/CitySelect';
import { API, CITY_COORDINATES } from '../../common/components/constants';
import ErrorBlockSection from '../ErrorBlockSection/ErrorBlockSection';
import Slider from '../Slider/Slider';
import { IWeatherDetails } from '../../common/interfaces/interfaces';

const NearestWeather: React.FC = () => {
  const KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<Array<IWeatherDetails> | []>([]);
  const changeCity = (returnCity: string): void => {
    setCity(returnCity.toLowerCase());
  };
  useEffect(() => {
    if (city !== '') {
      const cityLat: number = CITY_COORDINATES[city].lat;
      const cityLon: number = CITY_COORDINATES[city].lon;
      const url = `${API}/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=minutely,hourly,alerts,&units=metric&appid=${KEY}`;
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return false;
        })
        .then((data) => {
          if (data.daily) {
            const daylyDetails = data.daily.map((day: any) => {
              const details: IWeatherDetails = {
                dateTime: day.dt,
                temp: day.temp.eve,
                icon: day.weather[0].icon,
                description: day.weather[0].main,
              };
              return details;
            });
            setWeatherData(daylyDetails);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [city]);

  return (
    <section className="forecast-container">
      <div className="forecast-container__details">
        <h2 className="forecast-container__title">7 Days Forecast</h2>
        <div className="forecast-container__selects">
          <CitySelect changeCity={changeCity} />
        </div>
      </div>

      {city === '' ? (
        <div className="forecast-container__card">
          <ErrorBlockSection errorText="Fill in all the fields and the weather will be displayed" />
        </div>
      ) : <Slider weatherData={weatherData} />}
    </section>
  );
};

export default NearestWeather;
