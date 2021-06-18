import React, { useState } from 'react';

type IProps = {
  changeDate: (date: Date | string) => void;
};

const Datepicker: React.FC<IProps> = ({ changeDate }: IProps) => {
  const [toggleCalendarIcon, setToggleCalendarIcon] = useState<boolean>(true);
  const [pastDate, setPastDate] = useState<string>('Select date');
  const today: Date = new Date();
  const countDaysRange = 4;
  today.setDate(today.getDate() - 1);

  const getMonth = (todayMonth: Date): string => (todayMonth.getMonth() + 1 < 10 ? `0${todayMonth.getMonth() + 1}` : `${todayMonth.getMonth() + 1}`);

  const maxDatepicerDate = `${today.getFullYear()}-${getMonth(today)}-${today.getDate()}`;
  today.setDate(today.getDate() - countDaysRange);
  const minDatepicerDate = `${today.getFullYear()}-${getMonth(today)}-${today.getDate()}`;

  const handleInputDateTypeChange = (focusEvent: React.FocusEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLInputElement>): void => {
    focusEvent.currentTarget.type = 'text';
    focusEvent.currentTarget.placeholder = 'Select date';
    setToggleCalendarIcon(true);
  };

  const handleDateChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    changeDate(changeEvent.target.value);
    const selectedDate = new Date(changeEvent.target.value);
    setPastDate(`${getMonth(selectedDate)}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`);
    handleInputDateTypeChange(changeEvent);
  };

  const handleTextTypeChange = (focusEvent: React.FocusEvent<HTMLInputElement>): void => {
    focusEvent.currentTarget.type = 'date';
    focusEvent.currentTarget.placeholder = 'mm/dd/yyy';
    setToggleCalendarIcon(false);
  };

  const changeInputTextTypeByClick = (clickEvent: any): void => {
    clickEvent.target.parentNode.children[0].type = 'date';
    setToggleCalendarIcon(false);
  };

  return (
    <div className="select-date">
      <input type="text" max={maxDatepicerDate} min={minDatepicerDate} name="select-date" onFocus={handleTextTypeChange} onBlur={handleInputDateTypeChange} value={pastDate} onChange={handleDateChange} />
      {toggleCalendarIcon ? <div className="select-date__img-datepicker" onClick={changeInputTextTypeByClick} role="presentation" /> : null}
    </div>
  );
};

export default Datepicker;
