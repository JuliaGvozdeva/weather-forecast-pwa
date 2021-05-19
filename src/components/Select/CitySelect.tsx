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
    <div className='select-container'>
      <select className='select-container__select' name='city-select' value={city} onChange={handleChange}>
        <option value=''>Select sity</option>
        {
          cities.map((city) => {
            return <option key={city} value={city}>{city}</option>;
          })
        }
      </select>
    </div>
  );
};

export default CitySelect;
