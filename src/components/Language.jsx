import React from 'react';

const Language = (props) => {
    return (
        <li className='text-center md:text-start mb-10 list-none'>
            <h2 className='font-bold text-4xl capitalize'>{props.name}</h2>
            <p className='font-bold text-[#D9D9D9]'>{props.years} Years Experience</p>
        </li>
    );
};

export default Language;
