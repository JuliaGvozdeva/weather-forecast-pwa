import React, { useState } from 'react';

interface IProps {
    getDate: (date: Date | string) => void;
}

const Datepicker: React.FC<IProps> = ({ getDate }) => {
    const [toggleCalendarIcon, setToggleCalendarIcon] = useState<boolean>(true);
    const [pastDate, setPastDate] = useState<string>('Select date');
    let today: Date = new Date();
    today.setDate(today.getDate() - 1);

    const getMonth = (todayMonth: Date): string => {
        return todayMonth.getMonth() + 1 < 10 ? `0${todayMonth.getMonth() + 1}` : `${todayMonth.getMonth() + 1}`;
    };

    const maxDatepicerDate: string = `${today.getFullYear()}-${getMonth(today)}-${today.getDate()}`;
    today.setDate(today.getDate() - 5);
    let minDatepicerDate: string = `${today.getFullYear()}-${getMonth(today)}-${today.getDate()}`;

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        getDate(event.target.value);
        const selectedDate = new Date(event.target.value);
        setPastDate(`${getMonth(selectedDate)}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`);
    };

    const handleInputTextTypeChange = (event: React.MouseEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): void => {
        event.currentTarget.type = 'date';
        setToggleCalendarIcon(false);
    };

    const handleInputDateTypeChange = (event: React.MouseEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): void => {
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
            <input type='text' max={maxDatepicerDate} min={minDatepicerDate} name='select-date' onMouseOver={handleInputTextTypeChange} onBlur={handleInputDateTypeChange} onMouseOut={handleInputDateTypeChange} value={pastDate} onChange={handleDateChange}></input>
            {toggleCalendarIcon ? <div className="select-date__img-datepicker" onClick={changeInputTextTypeByClick}></div> : null}
        </div>
    );
};

export default Datepicker;
