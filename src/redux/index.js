import { combineReducers } from "redux";
import temperatureReducer from "./reducers/temperatureReducer";


const rootReducers = combineReducers({
  temperatureReducer,
});

export default rootReducers;
