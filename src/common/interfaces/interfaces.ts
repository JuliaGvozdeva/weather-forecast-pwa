interface IWeatherDetails {
    dateTime: number,
    temp: number,
    icon: string,
    description: string
};

interface IWeatherDetailsList {
    [daily: string]: IWeatherDetails
};

interface ICityDetails {
    lat: number,
    lon: number
};

interface IListOfCities {
    [city: string]: ICityDetails
};

export type { IWeatherDetails, IWeatherDetailsList, ICityDetails, IListOfCities };
