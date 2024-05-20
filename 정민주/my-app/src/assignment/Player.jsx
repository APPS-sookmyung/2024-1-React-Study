import React, {useReducer} from 'react';
import './Player.css'
import personReducer from '../reducer/player-reducer'

export default function Player() {
    const [player, dispatch] = useReducer(personReducer, initialPlayer)
    const movementHandler = (e) =>{
        console.log("이건 듣냐")
        if (e.key=="ArrowLeft"){
            console.log("Left!!!")
            dispatch({type:'left'})
        } else if (e.key=="ArrowRight"){
            console.log("Right!!!")
            dispatch({type:'right'})
        }
    }
    return (
        <div className="screen" tabIndex="1" onKeyDown={movementHandler}>
            <div className="sky">
                <img className="runningImg" src="/img/runningPerson.png" style={{transform:`translate(${player.x}px, ${player.y}px) scaleX(${player.face})`}}></img>
            </div>
            <div className="ground"></div>
        </div>
    );
}
const initialPlayer = {
    x: window.innerWidth/2,
    y: window.innerHeight*0.8,
    face: 1
}

