import React, { useState } from 'react';

interface IProps {
    changeDate: (date: Date | string) => void;
}

const Datepicker: React.FC<IProps> = ({ changeDate }) => {
  const [toggleCalendarIcon, setToggleCalendarIcon] = useState<boolean>(true);
  const [pastDate, setPastDate] = useState<string>('Select date');
  const today: Date = new Date();
  const countDaysRange = 4;
  today.setDate(today.getDate() - 1);

  const getMonth = (todayMonth: Date): string => {
    return todayMonth.getMonth() + 1 < 10 ? `0${todayMonth.getMonth() + 1}` : `${todayMonth.getMonth() + 1}`;
  };

  const maxDatepicerDate = `${today.getFullYear()}-${getMonth(today)}-${today.getDate()}`;
  today.setDate(today.getDate() - countDaysRange);
  const minDatepicerDate = `${today.getFullYear()}-${getMonth(today)}-${today.getDate()}`;

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeDate(event.target.value);
    const selectedDate = new Date(event.target.value);
    setPastDate(`${getMonth(selectedDate)}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`);
    handleInputDateTypeChange(event);
  };

  const handleInputTextTypeChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.currentTarget.type = 'date';
    event.currentTarget.placeholder = 'mm/dd/yyy';
    setToggleCalendarIcon(false);
  };

  const handleInputDateTypeChange = (event: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>): void => {
    event.currentTarget.type = 'text';
    event.currentTarget.placeholder = 'Select date';
    setToggleCalendarIcon(true);
  };

  const changeInputTextTypeByClick = (event: any): void => {
    event.target.parentNode.children[0].type = 'date';
    setToggleCalendarIcon(false);
  };

  return (
    <div className='select-date'>
      <input type='text' max={maxDatepicerDate} min={minDatepicerDate} name='select-date' onFocus={handleInputTextTypeChange} onBlur={handleInputDateTypeChange} value={pastDate} onChange={handleDateChange}></input>
      {toggleCalendarIcon ? <div className="select-date__img-datepicker" onClick={changeInputTextTypeByClick}></div> : null}
    </div>
  );
};

export default Datepicker;
