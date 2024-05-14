import React from 'react';

export default function BookImg({image}) {
    return (
        <div className="bookimage"> 
            <img
                className='img'
                src={image}
                alt="book"
            />
        </div>
    );
}

