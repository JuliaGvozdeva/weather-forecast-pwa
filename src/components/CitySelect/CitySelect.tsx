import React, { useState } from 'react';
import SelectArrowBottom from '../../assets/images/icons/chevron-bottom.png';
import SelectArrowTop from '../../assets/images/icons/chevron-top.png';

interface IProps {
  changeCity: (city: string) => void;
}

const CitySelect: React.FC<IProps> = ({ changeCity }: IProps) => {
  const [city, setCity] = useState<string>('Select city');
  const cities: Array<string> = ['Samara', 'Tolyatti', 'Saratov', 'Kazan', 'Krasnodar'];
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);

  const toggleOptionGroup = (mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setToggleSelect(!toggleSelect);
    mouseEvent.stopPropagation();
  };

  const selectCity = (mouseEvent: React.MouseEvent<HTMLLIElement>): void => {
    const target = mouseEvent.target as HTMLElement;
    setCity(target.innerText);
    changeCity(target.innerText);
  };

  window.addEventListener('click', (clickEvent: any) => {
    if (toggleSelect) {
      toggleOptionGroup(clickEvent);
    }
  });

  return (
    <div className="select-city" id="select" onClick={toggleOptionGroup} role="presentation">
      <div className="select-city__text">{city}</div>
      <div className="select-city__arrow">
        <img src={toggleSelect ? SelectArrowTop : SelectArrowBottom} alt="select arrow img" />
      </div>
      {
        toggleSelect
          ? (
            <ul className="select-city__optgroup">
              {
                cities.map((cityName) => <li id={cityName} className="select-city__select-item" key={cityName} value={cityName} onClick={selectCity} role="presentation">{cityName}</li>)
              }
            </ul>
          ) : null
      }
    </div>
  );
};

export default CitySelect;
