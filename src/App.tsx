import React from 'react';
import './App.scss';
import NearestWeather from './components/NearestWeather/NearestWeather';
import Logo from './components/Logo/Logo';
import PastForecast from './components/PastForecast/PastForecast';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Logo />
      <div className='weather-container'>
        <NearestWeather />
        <PastForecast />
      </div>
    </div>
  );
};

export default App;
