import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-12'>
            <p className='text-yellow-600'>---{subHeading}---</p>
            <h3 className='text-4xl uppercase border-y-4 p-4'>---{heading}---</h3>
        </div>
    );
};

export default SectionTitle;