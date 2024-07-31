import React,{useState} from "react";
import './AppXY.css';
export default function AppXY(){
    const [position, setPosition]=useState({x:0,y:0});
    
    return (
        <div className='container' 
        onPointerMove={(e)=>{
           console.log(e.clientX,e.clientY);
           //setPosition({x:e.clientX,y:prev.y});//수평으로만 이동이 가능하게? y를 고정하기->이전값으로
           setPosition((prev)=>({x:e.clientX,y:e.clientY})); 
        }}>
            <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}/>
        </div>
    );
}  