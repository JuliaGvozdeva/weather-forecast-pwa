import React from 'react';
import emptyIcon from '../../assets/images/icons/emptyBlockIcon.png';

interface IProps {
    errorText: string
}

const ErrorBlockSection: React.FC<IProps> = ({ errorText }) => {
    return (
        <div className='weather-block_empty'>
            <img src={emptyIcon} alt='empty-block-icon' />
            <p>{errorText}</p>
        </div>
    );
};

export default ErrorBlockSection;
