import {apiKeys} from './apiKey'

let apiKey = apiKeys;

let count = 0;

export const getTemperature = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey[count]}`)
    .then((res) => {
      if (res.status === 200) {
        count = 0;
        return res.json();
      }
      throw res.status;
    })
    .then((result) => {
        return result;
    })
    .catch((err) => {
        count ++;
        if(count < apiKey.length){ return getTemperature(city); }
        else {
          count = 0; 
          throw Error(err); 
        }
    });
};

export const getAirPollution = async (lat, lon) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey[count]}`)
    .then((res) => {
      if (res.status === 200) {
        count = 0;
        return res.json();
      }
      throw res.status;
    })
    .then((result) => {
        return result;
    })
    .catch((err) => {
      count ++;
        if(count < apiKey.length){ return getAirPollution(lat, lon); }
        else { 
          count = 0; 
          throw Error(err); 
        }
    });
};
