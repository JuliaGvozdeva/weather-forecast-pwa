import React from 'react';
import emptyIcon from '../../assets/images/icons/emptyBlockIcon.png';

const EmptyBlockSection: React.FC = () => {
    return (
        <div className='weather-block_empty'>
            <img src={emptyIcon} alt='empty-block-icon' />
            <p>{'Fill in all the fields and the weather will be displayed'}</p>
        </div>
    );
};

export default EmptyBlockSection;
