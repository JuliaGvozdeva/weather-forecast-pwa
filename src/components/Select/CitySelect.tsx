import React, { useState } from 'react';

interface IProps {
  getCity: (city: string) => void;
}

const CitySelect: React.FC<IProps> = ({ getCity }) => {
  const [city, setCity] = useState<string>('');
  const cities = ['Samara', 'Tolyatti', 'Saratov', 'Kazan', 'Krasnodar'];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
    getCity(event.target.value);
  };

  return (
    <div className='city-select'>
      <select className='city-select__select' value={city} onChange={handleChange}>
        <option value='' disabled selected hidden>Select sity</option>
        {
          cities.map((city) => {
            return <option className='city-select__select__option' key={city} value={city}>{city}</option>;
          })
        }
      </select>
    </div >
  );
};

export default CitySelect;
