import React from 'react';
import emptyIcon from '../../assets/images/icons/emptyBlockIcon.png';

interface IProps {
    errorText: string
}

const ErrorBlockSection: React.FC<IProps> = ({ errorText }) => {
    return (
        <div className='error-container'>
            <img src={emptyIcon} alt='error-container-icon' />
            <p>{errorText}</p>
        </div>
    );
};

export default ErrorBlockSection;
