interface IWeatherDetails {
    dateTime: number,
    temp: number,
    icon: string,
    description: string
};

interface IWeatherDetailsList {
    [daily: string]: IWeatherDetails
};

export type { IWeatherDetails, IWeatherDetailsList };
