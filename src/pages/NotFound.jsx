import React from 'react';
const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <h2 className="relative text-[1000px]"> 404 <span className='after:content-[""] absolute h-full w-1'></span> Nothing here to see</h2>
        </div>
    );
};

export default NotFound;