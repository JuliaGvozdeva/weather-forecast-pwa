import { IListOfCities } from '../../common/interfaces/interfaces';

export const API: string = 'https://api.openweathermap.org';
export const COUNT_CARDS_WEB: number = 3;
export const COUNT_CARDS_MOBILE: number = 1;
export const COUNT_WEATHER_CARDS_ALL: number = 7;
export const CITY_COORDINATES: IListOfCities = {
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
export const COUNT_MILISEC = 1000;
