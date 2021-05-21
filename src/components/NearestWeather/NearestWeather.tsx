import React, { useEffect, useState } from 'react';
import CitySelect from '../Select/CitySelect';
import { API, CITY_COORDINATES } from '../../common/components/constants';
import ErrorBlockSection from '../ErrorBlockSection/ErrorBlockSection';
import Slider from '../Slider/Slider';
import { IWeatherDetails, IWeatherDetailsList } from '../../common/interfaces/interfaces';

const NearestWeather: React.FC = () => {
  const KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<Array<IWeatherDetailsList> | []>([]);
  const getCity = (returnCity: string): void => {
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
        })
        .then((data) => {
          if (data.daily) {
            const daylyDetails = data.daily.map((day: any) => {
              const details: IWeatherDetails = {
                dateTime: day.dt,
                temp: day.temp.eve,
                icon: day.weather[0].icon,
                description: day.weather[0].main
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
    <div className='forecast-container'>
      <div className='forecast-container__details'>
        <h1 className='forecast-container__title'>7 Days Forecast</h1>
        <div className="forecast-container__selects">
          <CitySelect getCity={getCity} />
        </div>
      </div>
      {city === '' ? <ErrorBlockSection errorText={'Fill in all the fields and the weather will be displayed'} /> : <Slider weatherData={weatherData} />}
    </div>
  );
};

export default NearestWeather;
