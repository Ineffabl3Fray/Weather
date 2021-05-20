import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./temperature.css";
import { getTemperatureData } from "../../redux/actions/temperatureActions";
import Footer from "../footer/Footer";

export const Temperature = () => {
  const temperature = useSelector(state => state.temperatureReducer.temperature);
  const airPollution = useSelector(state => state.temperatureReducer.airPollution);
  const error = useSelector(state => state.temperatureReducer.error);

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  let date = new Date();

  const getTemperature = () => {
    dispatch(getTemperatureData(searchValue));
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  useEffect(() => {
    dispatch(getTemperatureData("Baku"));
  }, []);

  return (
    <div>
      <div className="main-temperature flex-row">
        <div className="main-temperature-image"></div>
        {
          <div className="main-temperature-body flex-row">
            <div className="left-side flex-row">
            {
              error !== true && temperature && temperature.main ? 
              <div className="left-side-content flex-row">
                <p className="weather-temperature">{Math.floor(temperature.main.temp)}</p>
                <span className="degree-sign">°</span>
                <div style={{maxWidth: "60%"}} className="flex-column">
                  <h4 className="city-name">{temperature.name}, {temperature.sys.country}</h4>
                  <p className="full-date">{date.toDateString()}</p>
                </div>
                <div className="flex-column">
                  <img className="weather-icon" src={`https://openweathermap.org/img/w/${temperature.weather[0].icon}.png`} alt="" />
                  <p className="weather-condition">{capitalize(temperature.weather[0].description)}</p>
                </div>
              </div>
              :
              error === true &&
              <div className="left-side-content flex-row">
                <h1 className="">There is an unknown problem. Please try again...</h1>
              </div>
        }
            </div>
            {
              temperature && 
            <div className="right-side flex-column">
              <div className="right-side-image"></div>
              <div className="right-side-body">
              <div className="search-form flex-row">
                <input type="text" onChange={(v) => setSearchValue(v.target.value)} placeholder='Search city...'/>
                <button onClick={getTemperature} className='search-button'>Search</button>
              </div>
              <div className="line"></div>

              <div className="weather-details-main">
                <h3 className='weather-details-name'>Weather details:</h3>
                <div className="weather-details-item flex-row">
                  <span>Cloud:</span>
                  <span>{temperature.clouds ? temperature.clouds.all : 0}  %</span>
                </div>
                <div className="weather-details-item flex-row">
                  <span>Humidity:</span>
                  <span>{temperature.main ? temperature.main.humidity : 0}  %</span>
                </div>
                <div className="weather-details-item flex-row">
                  <span>Wind:</span>
                  <span>{temperature.wind ? temperature.wind.speed : 0}  kmph</span>
                </div>
                <div className="weather-details-item flex-row">
                  <span>Pressure:</span>
                  <span>{temperature.main ? temperature.main.pressure : 0}  mb</span>
                </div>
                <div className="weather-details-item flex-row">
                  <span>Feels like:</span>
                  <span>{temperature.main ? temperature.main.feels_like : 0}  °</span>
                </div>

                {
                airPollution &&
                <div style={{marginTop: "4%"}}>
                  <h3 className='weather-details-name'>Air pollution:</h3>
                  <div className="weather-details-item flex-row">
                    <span>Carbon monoxide:</span>
                    <span>{airPollution.components ? airPollution.components.co : 0}</span>
                  </div>
                  <div className="weather-details-item flex-row">
                    <span>Nitrogen dioxide:</span>
                    <span>{airPollution.components ? airPollution.components.no2 : 0}</span>
                  </div>
                  <div className="weather-details-item flex-row">
                    <span>Ozone:</span>
                    <span>{airPollution.components ? airPollution.components.o3 : 0}</span>
                  </div>
                  <div className="weather-details-item flex-row">
                    <span>Sulphur dioxide:</span>
                    <span>{airPollution.components ? airPollution.components.so2 : 0}</span>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
            }
        </div>
        }
      </div>
    
        <Footer/>
    </div>
  );
};
