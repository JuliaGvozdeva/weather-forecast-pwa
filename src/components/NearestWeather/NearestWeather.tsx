import React, { useEffect, useState } from 'react';
import CitySelect from '../CitySelect/CitySelect';
import ErrorBlockSection from '../ErrorBlockSection/ErrorBlockSection';
import Slider from '../Slider/Slider';
import { IWeatherDetails } from '../../common/interfaces/interfaces';
import { getDailyWeatherInfo } from '../../services/requestLibrary';

const NearestWeather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<Array<IWeatherDetails> | []>([]);
  const changeCity = (returnCity: string): void => {
    setCity(returnCity.toLowerCase());
  };
  useEffect(() => {
    if (city !== '') {
      getDailyWeatherInfo(city)
        .then((response: Array<IWeatherDetails> | []) => {
          setWeatherData(response);
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
