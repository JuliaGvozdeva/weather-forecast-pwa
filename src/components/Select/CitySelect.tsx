import React, { useState } from 'react';
import SelectArrowBottom from '../../assets/images/icons/chevron-bottom.png';
import SelectArrowTop from '../../assets/images/icons/chevron-top.png';

interface IProps {
  getCity: (city: string) => void;
}

const CitySelect: React.FC<IProps> = ({ getCity }) => {
  const [city, setCity] = useState<string>('Select city');
  const cities = ['Samara', 'Tolyatti', 'Saratov', 'Kazan', 'Krasnodar'];
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);

  const toggleOptGroup = (event: any) => {
    setToggleSelect(!toggleSelect);
    event.stopPropagation();
  };

  const selectCity = (event: React.MouseEvent<HTMLLIElement>) => {
    const target: any = event.target;
    setCity(target.innerText);
    getCity(target.innerText);
  };

  window.addEventListener('click', (event: any) => {
    if (toggleSelect) {
      toggleOptGroup(event);
    }
  });

  return (
    <div className='city-select' id='select' onClick={toggleOptGroup}>
      <div className='city-select__text'>{city}</div>
      <div className='city-select__arrow'>
        <img src={toggleSelect ? SelectArrowTop : SelectArrowBottom} alt='select arrow' />
      </div>
      {
        toggleSelect ?
          <ul className='city-select__optgroup'>
            {
              cities.map((city) => {
                return <li id={city} className='city-select__select-item' key={city} value={city} onClick={selectCity}>{city}</li>;
              })
            }
          </ul> : null
      }
    </div>
  );
};

export default CitySelect;
