import initialState from '../initialState';
import * as actionTypes from '../actions/temperatureTypes';

export default function temperatureReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_TEMPERATURE:
            return{
                ...state,
                temperature: action.payload
            }
            case actionTypes.GET_AIRPOLLUTION:
                return{
                    ...state,
                    airPollution: action.payload
                }
                case actionTypes.ERROR:
                    return{
                        ...state,
                        error: action.payload
                    }
        default:
            return{...state}
    }
}
