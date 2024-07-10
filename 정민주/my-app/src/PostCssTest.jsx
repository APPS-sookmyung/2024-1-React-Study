import React from 'react';
import './PostCssTest.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponent from './StyledComponent'
import TailwindComponent from './TailwindComponent'

export default function PostCssTest() {
    return (
        <div>
            <Button1></Button1>
            <Button2></Button2>
            <StyledComponent></StyledComponent>
            <TailwindComponent></TailwindComponent>
        </div>
    );
}

