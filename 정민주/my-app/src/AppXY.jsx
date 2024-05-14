import React, { useState } from 'react';
import './AppXY.css'

export default function AppXY() {
    const [position, setPosition] = useState({x:0, y:0})
    return (
        <div>
            <div className="container" onPointerMove={(e)=>{
                setPosition({x: e.clientX, y: e.clientY})

                //만약 수평으로만 이동이 가능하게 만들려면?
                //setPosition((prev)=> ({x:e.clientX, y:prev.y}))
                //또는 업데이트 안되는 녀석들 일일이 다 prev로 표시하기 귀찮으니까
                //...prev을 통해서 prev안에 있는 값들을 전부 copy해 오게 만들고 
                //그중 x관련 값만 덮어씌울 것임을 명시해준다.
                //setPosition((prev)=> ({...prev, x:e.clientX}))
            }}>
                <div className='pointer' style={{transform:`translate(${position.x}px, ${position.y}px)`}}></div>
            </div>
        </div>
    );
}

