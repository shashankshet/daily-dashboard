import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=12.9719&longitude=77.5937&hourly=temperature_2m,precipitation_probability&timezone=GMT&forecast_days=1'
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="card loading">Loading weather data...</div>;
  }

  if (!weatherData) {
    return <div className="card error">Failed to load weather data</div>;
  }

  // Extract the latest hourly data
  const latestHourIndex = weatherData.hourly.time.length - 1;
  const latestTemperature = weatherData.hourly.temperature_2m[latestHourIndex];
  const latestPrecipitation = weatherData.hourly.precipitation_probability[latestHourIndex];

  return (
    <div className="card weather-widget">
      <h3>Current Weather</h3>
      <p><strong>Temperature:</strong> {latestTemperature}°C</p>
      <p><strong>Precipitation Probability:</strong> {latestPrecipitation}%</p>
    </div>
  );
};

export default WeatherWidget;
