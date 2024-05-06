import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'


const API_KEY = "8d34cb5f26154a1d92b114124240605";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=4&aqi=yes&alerts=yes`);
        setWeatherData(response.data);
      } catch(error) {
        console.log(error);
      }
    };

    if(location) {
      fetchData();
    }
  }, [location]);

  const turkishCities = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir",
    "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır",
    "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay",
    "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli",
    "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu",
    "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa",
    "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
    "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
  ];
  

  return (
    <div className='app-container'>
      <h1 className='app-title'>Hava Durumu Uygulaması</h1>
      <div className='input-container'>
        <select className='location-input' value={location} onChange={(e) => setLocation(e.target.value)}>
          {
          turkishCities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
      </div>

      {weatherData && (
        <div className='weather-container'>
          {weatherData.forecast.forecastday.map((day) => (
            <div className='day-container' key={day.date}>
              <h3 className='date'>{day.date}</h3>
              <img className='weather-icon' src={day.day.condition.icon} alt={day.day.condition.text}/>
              <p className='temperature'>{day.day.avgtemp_c} °C</p>
              <p className='temperature'>{day.day.condition.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Weather;
