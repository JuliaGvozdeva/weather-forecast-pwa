import React from 'react';
import './App.scss';
import NearestWeather from './components/NearestWeather/NearestWeather';
import logo from './assets/images/logo.png';
import PastForecast from './components/PastForecast/PastForecast';

const App: React.FC = () => (
  <main className="app-container">
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
    <div className="weather-container">
      <NearestWeather />
      <PastForecast />
    </div>
    <footer>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</footer>
  </main>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/weather-forecast-pwa/sw.js').then(function (registration) {
    console.log('Service worker registration succeeded:', registration);
  }, function (error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}

export default App;
