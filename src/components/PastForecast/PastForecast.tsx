import React, { useEffect, useState } from 'react';
import CitySelect from '../CitySelect/CitySelect';
import { COUNT_MILISEC } from '../../common/components/constants';
import ErrorBlockSection from '../ErrorBlockSection/ErrorBlockSection';
import { IWeatherDetails } from '../../common/interfaces/interfaces';
import Datepicker from '../Datepicker/Datepicker';
import WeatherCard from '../WeatherCard/WeatherCard';
import { getPastForecastInfo } from '../../services/requestLibrary';

const PastForecast: React.FC = () => {
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
      getPastForecastInfo(city, date).then((pastForecastData: any) => {
        setPastWeatherData(pastForecastData);
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
