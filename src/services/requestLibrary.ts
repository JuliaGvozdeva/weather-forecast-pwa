import { API, CITY_COORDINATES } from '../common/components/constants';
import { IWeatherDetails } from '../common/interfaces/interfaces';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

type Coordinates = {
  latitude: number,
  longitude: number
};

const getCurrentCoordinates = (options = {}) => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject, options);
});

async function getDailyWeatherInfo(city: string): Promise<Array<IWeatherDetails> | []> {
  const coordinates: Coordinates = {
    latitude: 0,
    longitude: 0,
  };

  if (city === 'current location') {
    const position: any = await getCurrentCoordinates();
    coordinates.latitude = position.coords.latitude;
    coordinates.longitude = position.coords.longitude;
  } else {
    coordinates.latitude = CITY_COORDINATES[city].lat;
    coordinates.longitude = CITY_COORDINATES[city].lon;
  }

  const url = `${API}/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&exclude=minutely,hourly,alerts,&units=metric&appid=${WEATHER_API_KEY}`;

  const dailyWeatherInfo: Promise<Array<IWeatherDetails> | []> = fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return false;
    })
    .then((dailyWeatherData) => {
      let dailyWeatherDataTwo = [];
      if (dailyWeatherData.daily) {
        dailyWeatherDataTwo = dailyWeatherData.daily.map((day: any) => {
          const details: IWeatherDetails = {
            dateTime: day.dt,
            temp: day.temp.eve,
            icon: day.weather[0].icon,
            description: day.weather[0].main,
          };
          return details;
        });
      }

      return dailyWeatherDataTwo;
    })
    .catch((error) => {
      console.error(error);
    });

  return dailyWeatherInfo;
}

async function getPastForecastInfo(city: string, date: number): Promise<void | IWeatherDetails> {
  const coordinates: Coordinates = {
    latitude: 0,
    longitude: 0,
  };

  if (city === 'current location') {
    const position: any = await getCurrentCoordinates();
    coordinates.latitude = position.coords.latitude;
    coordinates.longitude = position.coords.longitude;
  } else {
    coordinates.latitude = CITY_COORDINATES[city].lat;
    coordinates.longitude = CITY_COORDINATES[city].lon;
  }

  const url = `${API}/data/2.5/onecall/timemachine?lat=${coordinates.latitude}&lon=${coordinates.longitude}&dt=${date}&units=metric&appid=${WEATHER_API_KEY}`;

  const pastForecastInfo: Promise<void | IWeatherDetails> = fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return false;
    })
    .then((pastDayData) => {
      let weatherDetails: IWeatherDetails = {
        dateTime: 0,
        temp: 0,
        icon: '',
        description: '',
      };
      if (pastDayData) {
        weatherDetails = {
          dateTime: pastDayData.current.dt,
          temp: pastDayData.current.temp,
          icon: pastDayData.current.weather[0].icon,
          description: pastDayData.current.weather[0].main,
        };
      }

      return weatherDetails;
    })
    .catch((error) => {
      console.error(error);
    });

  return pastForecastInfo;
}

export { getDailyWeatherInfo, getPastForecastInfo };
