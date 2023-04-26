import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const key = '2dc20d0f72e149de22898142fa078179';

const Weather = () => {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  const handleCityChange = (city) => {
    setCity(city);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        setWeatherData(response.data);
        console.log(response.data)
      })
        .catch(error => {
          console.log(error);
        });
    }

  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
      <div className='app'>
        <div className='search'>
          <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyPress={handleSearch}
          placeholder='Enter Location'
          type='text/'
          >
          </input>
        </div>
        <div className='container'>
          <div className="top"></div>
          <div className="">
            <p>Barcelona</p>
          </div>
          <div className="temp">
            <h1>22°C</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className='bold'>25°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>18Km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
      ,{/**
       * <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
        onChangeText={handleCityChange}
        value={city} />
      <Button title="Search"
        onPress={handleSearch} />
      <View>
        {weatherData && (
          <View>
            <Text>City: {weatherData.name}</Text>
            <Text>Temperature: {weatherData.temp}</Text>
            <Text>Description: {weatherData.weather[0].description}</Text>
          </View>
        )}
      </View>
       */}
  );
};

export default Weather;