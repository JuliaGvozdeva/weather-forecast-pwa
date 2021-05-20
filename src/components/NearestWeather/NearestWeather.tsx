import React, { useEffect, useState } from 'react';
import CitySelect from '../Select/CitySelect';
import { API } from '../../common/components/constants';
import EmptyBlockSection from '../EmptyBlockSection/EmptyBlockSection';
import Slider from '../Slider/Slider';
import { IWeatherDetails, IWeatherDetailsList } from '../../common/interfaces/interfaces';

interface ICityDetails {
  lat: number,
  lon: number
}

interface IListOfCities {
  [city: string]: ICityDetails
}

const NearestWeather: React.FC = () => {
  const KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const cityCoordinates: IListOfCities = {
    samara: {
      lat: 53.195873,
      lon: 50.100193
    },
    tolyatti: {
      lat: 53.507836,
      lon: 49.420393
    },
    saratov: {
      lat: 51.533557,
      lon: 46.034257
    },
    kazan: {
      lat: 55.796127,
      lon: 49.106405
    },
    krasnodar: {
      lat: 45.035470,
      lon: 38.975313
    }
  };
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<Array<IWeatherDetailsList> | []>([]);
  const getCity = (returnCity: string): void => {
    setCity(returnCity.toLowerCase());
  };
  useEffect(() => {
    if (city !== '') {
      const cityLat: number = cityCoordinates[city].lat;
      const cityLon: number = cityCoordinates[city].lon;
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
      <div className="forecast-container__details">
        <h1 className='title'>7 Days Forecast</h1>
        <CitySelect getCity={getCity} />
      </div>
      {city === '' ? <EmptyBlockSection /> : <Slider weatherData={weatherData} />}
    </div>
  );
};

export default NearestWeather;
