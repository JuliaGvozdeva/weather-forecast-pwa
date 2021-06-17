import React, { useState } from 'react';
import SelectArrowBottom from '../../assets/images/icons/chevron-bottom.png';
import SelectArrowTop from '../../assets/images/icons/chevron-top.png';

interface IProps {
  changeCity: (city: string) => void;
}

const CitySelect: React.FC<IProps> = ({ changeCity }) => {
  const [city, setCity] = useState<string>('Select city');
  const cities: Array<string> = ['Samara', 'Tolyatti', 'Saratov', 'Kazan', 'Krasnodar'];
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);

  const toggleOptGroup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setToggleSelect(!toggleSelect);
    event.stopPropagation();
  };

  const selectCity = (event: React.MouseEvent<HTMLLIElement>): void => {
    const target: any = event.target;
    setCity(target.innerText);
    changeCity(target.innerText);
  };

  window.addEventListener('click', (event: any) => {
    if (toggleSelect) {
      toggleOptGroup(event);
    }
  });

  return (
    <div className='select-city' id='select' onClick={toggleOptGroup}>
      <div className='select-city__text'>{city}</div>
      <div className='select-city__arrow'>
        <img src={toggleSelect ? SelectArrowTop : SelectArrowBottom} alt='select arrow' />
      </div>
      {
        toggleSelect
          ? <ul className='select-city__optgroup'>
            {
              cities.map((city) => {
                return <li id={city} className='select-city__select-item' key={city} value={city} onClick={selectCity}>{city}</li>;
              })
            }
          </ul> : null
      }
    </div>
  );
};

export default CitySelect;
