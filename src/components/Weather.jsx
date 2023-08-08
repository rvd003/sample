// import React, { useState } from 'react';
// import axios from 'axios';
// import './Weather.css';

// const apiKey = 'c81f739e9169b4b5c16913784b6a2dac';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [currentWeather, setCurrentWeather] = useState({});
//   const [forecast, setForecast] = useState([]);
//   const [showForecast, setShowForecast] = useState(false);
// const [inKelvin, setInKelvin] = useState(false);

//   const handleInputChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleSearch = () => {
//     if (city) {
//       getCurrentWeather(city);
// getForecast(city);
//     }
//   };

//   const handleViewForecast = () => {
//     if (city) {
//       getForecast(city);
//     }
//   };

//   const getCurrentWeather = (city) => {
//     axios
//       .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
//       .then((response) => {
//         setCurrentWeather(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching current weather data:', error);
//       });
//   };

//   const getForecast = (city) => {
//     axios
//       .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
//       .then((response) => {
//         const dailyForecast = filterDailyForecast(response.data.list);
//         setForecast(dailyForecast);
//         setShowForecast(true);
//       })
//       .catch((error) => {
//         console.error('Error fetching forecast data:', error);
//       });
//   };

//   const filterDailyForecast = (forecastList) => {
//     const dailyForecast = {};
//     forecastList.forEach((item) => {
//       const date = new Date(item.dt * 1000).toDateString();
//       if (!dailyForecast[date]) {
//         dailyForecast[date] = item;
//       }
//     });
//     return Object.values(dailyForecast);
//   };

//   return (
//     <div className="container">
//         <div className='Grid'>
//         <div> <h1>Weather Forecast App</h1></div>
//      <div> <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name" /></div>
//      <div> <button onClick={handleSearch}>Search</button></div>
//      <br/>
//      <div> <button className='view' onClick={handleViewForecast}>View 5 days</button></div>

//         </div>

//       {Object.keys(currentWeather).length !== 0 && (
//         <div id="currentWeather">
//           <h2>Current Weather in {city}</h2>
//           <p>Temperature: {currentWeather.main.temp} °C</p>
//           <p>Min Temperature: {currentWeather.main.temp_min} °C</p>
//           <p>Max Temperature: {currentWeather.main.temp_max} °C</p>
//           <p>Humidity: {currentWeather.main.humidity} %</p>
//           <p>Wind Speed: {currentWeather.wind.speed} m/s</p>
//           <p>Wind Direction: {currentWeather.wind.deg}°</p>
//           <p>Description: {currentWeather.weather[0].description}</p>
//           <img
//             src={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
//             alt={currentWeather.weather[0].description}
//           />
//         </div>
//       )}

//       {showForecast && forecast.length > 0 && (
//         <div id="forecast">
//           <h2>5-Day Forecast for {city}</h2>
//           <ul>
//             {forecast.map((item) => (
//               <li key={item.dt}>
//                 <p>Date: {new Date(item.dt * 1000).toDateString()}</p>
//                 <p>Average Temperature: {item.main.temp} °C</p>
//                 <p>Description: {item.weather[0].description}</p>
//                 <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const apiKey = 'c81f739e9169b4b5c16913784b6a2dac';

const App = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [inKelvin, setInKelvin] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city) {
      getCurrentWeather(city);
      getForecast(city);
    }
  };

  const handleConvertToKelvin = () => {
    setInKelvin(!inKelvin);
  };

  const getCurrentWeather = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((error) => {
        console.error('Error fetching current weather data:', error);
      });
  };

  const getForecast = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        // Group forecast data by date and show only the first entry for each date
        const forecastByDate = {};
        response.data.list.forEach((item) => {
          const date = new Date(item.dt * 1000).toDateString();
          if (!forecastByDate[date]) {
            forecastByDate[date] = item;
          }
        });
        setForecast(Object.values(forecastByDate));
      })
      .catch((error) => {
        console.error('Error fetching forecast data:', error);
        alert('Please Enter Valid City Name')
      });
  };

  const convertToKelvin = (celsius) => {
    return (celsius + 273.15).toFixed(2);
  };

  const getTemperatureWithUnit = (celsius) => {
    return inKelvin ? `${convertToKelvin(celsius)} °K` : `${celsius} °C`;
  };

  return (
    <div className="container">
     
      <div className="search-container">
      <h1><i>Weather Forecast App </i></h1>
        <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name" />
        <div className='button'>
        <button onClick={handleSearch}>Search</button>
       
        </div>
       
      </div>

      <div className="weather-section">
        {Object.keys(currentWeather).length !== 0 && (
          <div id="currentWeather">
            <h2>Current Weather in <i>{city} </i></h2> <p><button className='view' onClick={handleConvertToKelvin}>{inKelvin ? 'In Celsius' : 'In Kelvin'}</button>
</p>
            <p><b>Temperature: </b>{getTemperatureWithUnit(currentWeather.main.temp)}</p>
            <p><b>Min Temperature:</b> {getTemperatureWithUnit(currentWeather.main.temp_min)}</p>
            <p><b>Max Temperature:</b> {getTemperatureWithUnit(currentWeather.main.temp_max)}</p>
            <p><b>Humidity:</b> {currentWeather.main.humidity} %</p>
            <p><b>Wind Speed:</b> {currentWeather.wind.speed} m/s</p>
            <p><b>Wind Direction:</b> {currentWeather.wind.deg}°</p>
            <p><b>Description: </b>{currentWeather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
              alt={currentWeather.weather[0].description}
            />
          </div>
        )}
      </div>

      <hr />

      <div className="weather-section">
        {forecast.length > 0 && (
          <div id="forecast">
            <h2>5-Day Forecast for {city}</h2>
            <ul>
              {forecast.map((item) => (
                <li key={item.dt}>
                  <p><b>Date:</b> {new Date(item.dt * 1000).toDateString()}</p>
                  <p><b>Average Temperature: </b>{getTemperatureWithUnit(item.main.temp)}</p>
                  <p><b>Description: </b>{item.weather[0].description}</p>
                  <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
