import React from 'react';
import './App.scss';
import NearestWeather from './components/NearestWeather/NearestWeather';
import Logo from './components/Logo/Logo';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Logo />
      <div className='weather-container'>
        <NearestWeather />
        <NearestWeather />
      </div>
    </div>
  );
};

export default App;
