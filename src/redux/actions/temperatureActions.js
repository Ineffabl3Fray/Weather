import * as temperatureTypes from './temperatureTypes';
import {getAirPollution, getTemperature} from '../../api/temperature.api'


export const getTemperatureData = (city) => async (dispatch) => {
    try {
        let temperature = await getTemperature(city);
        let airPollution = await getAirPollution(Math.floor(temperature.coord.lat), Math.floor(temperature.coord.lon))
        dispatch({type: temperatureTypes.GET_TEMPERATURE, payload: temperature});
        dispatch({type: temperatureTypes.ERROR, payload: false});
        return dispatch({type: temperatureTypes.GET_AIRPOLLUTION, payload: airPollution.list[0]});
    } catch (error) {
        console.log(error);
        dispatch({type: temperatureTypes.ERROR, payload: true});
        dispatch({type: temperatureTypes.GET_TEMPERATURE, payload: []});
        dispatch({type: temperatureTypes.GET_AIRPOLLUTION, payload: []});
    }
}
