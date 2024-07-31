import React, { useState } from 'react';

export default function Counter({total, onClick}) {
    const [number, setNumber] = useState(0);
    // useState로 초기값 지정 -> 배열 리턴 (첫 인자: 상태값 접근 변수, 두 번째 인자: 변수 업데이터 함수)
    return (
        <div className='counter'>
            <p className='number'>
                {number} <span className='total'>/{total}</span>
            </p>
            <button
                className='button' 
                onClick={()=>{
                // setNumber(number + 1); // count=0 <- +
                
                // 여러번 호출해도 1만 증가함. count=0으로 고정된 상태에서 호출되기 때문
                // setNumber((prev)=>prev+1); 
                // setNumber((prev)=>prev+1); 
                // setNumber((prev)=>prev+1); 
                // setNumber((prev)=>prev+1); 
                setNumber((prev)=>prev+1); //이런 식으로 호출해야 5씩 더해짐.
                onClick();
            }}>Add +</button>
        </div>
    );
}

