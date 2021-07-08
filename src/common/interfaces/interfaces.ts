interface IWeatherDetails {
  dateTime: number,
  temp: number,
  icon: string,
  description: string
}

interface ICityDetails {
  lat: number,
  lon: number
}

interface IListOfCities {
  [city: string]: ICityDetails
}

export type { IWeatherDetails, ICityDetails, IListOfCities };
