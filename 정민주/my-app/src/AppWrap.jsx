import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar color="red">
                <p>추가하고 싶은 내용</p>
            </Navbar>
            <Navbar color="orange"></Navbar>
            <Navbar color="yellow">
                <h1>제 이름은 흰눈썹황금새!</h1>
            </Navbar>
        </div>
    );
}
function Navbar({color, children}){
    return(
        <header style={{backgroundColor:color}}>
            <Avatar
                image="img/흰눈썹황금새.jpg"
                name="Bob"
                size={100}/>
            {children}
        </header>
    )
}
function Avatar ({image, name, size}){
    return(
        <div>
            <img
                src={image}
                alt={`${name}`}
                name={name}
                width={size}
                height={size}
                style={{borderRadius:'50%'}}/>
        </div>
    )
}