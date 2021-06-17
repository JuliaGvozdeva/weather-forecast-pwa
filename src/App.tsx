import React from 'react';
import './App.scss';
import NearestWeather from './components/NearestWeather/NearestWeather';
import Logo from './components/Logo/Logo';
import PastForecast from './components/PastForecast/PastForecast';

const App: React.FC = () => {
  return (
    <main className="app-container">
      <header>
        <Logo />
      </header>
      <div className='weather-container'>
        <NearestWeather />
        <PastForecast />
      </div>
      <footer>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</footer>
    </main>
  );
};

export default App;
