### 필기
https://mnevermore1122.tistory.com/179    
비밀번호: 1122

---
### 과제

Player.jsx
```js
import React, {useReducer} from 'react';
import './Player.css'
import personReducer from './reducer/player-reducer'

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
```

player-reducer.js
```js
export default function playerReducer(player,action){
    switch(action.type){
        case 'left':{
            return ({
                x: player.x-10,
                y: player.y,
                face: -1
            })
        }
        case 'right':{
            return ({
                x: player.x+10,
                y: player.y,
                face: 1
            })
        }
        default: {
            throw Error("Unknown Operation")
        }
    }

}
```

index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Player from './Player';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Player/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```