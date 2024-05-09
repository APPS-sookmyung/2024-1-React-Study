import React, {useState} from 'react';
import './Item.css'

export default function Item({name, price, quantity}) {
    const [q, setQ] = useState(quantity)
    return (
        <div class="item">
            <p class="explanation">◾ {name} {price}원 {q}개</p>
            <div class="buttonDiv">
                <button class="button button1" onClick={()=>{setQ(prev=>parseInt(prev)+1)}}>⬆</button>
                <button class="button button2" onClick={()=>{setQ(prev=>{
                    prev = parseInt(prev)
                    if (prev<1) return 0
                    else return prev-1
                })}}>⬇</button>
            </div>
            
        </div>
    );
}

