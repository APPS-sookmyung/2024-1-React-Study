import React from 'react';
import BookImg from './BookImg';
import { useState, useEffect } from 'react';

export default function Book({image, title, author, onClick, onMinusClick}) {
    const [mark, setMark] = useState(0);
    return (
        <>
            <div className='book'>
                <BookImg image={image}/>
                <p className='title'>{title}</p>
                <p className='author'>{author}</p>
            </div>

            <div className='bookmark'>
                <p className='mark'>{mark}</p>
                <button
                    className='minusbutton'
                    onClick={()=>{
                        if (mark > 0){
                            setMark((prev)=>prev-1);
                            onMinusClick();
                        }   
                    }}>Page -</button>

                <button
                    className='plusbutton'
                    onClick={()=>{
                        setMark((prev)=>prev+1);
                        onClick();
                    }}>Page +</button>
               
            </div>
        </>
        
    );
}

