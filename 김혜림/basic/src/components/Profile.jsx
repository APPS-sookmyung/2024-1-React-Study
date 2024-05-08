import React from 'react';

export default function Profile({image,name,title, isNew}){
    return (
    <div className='profile'>
        <Avatar image={image} isNew={isNew}/>
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
    );
}