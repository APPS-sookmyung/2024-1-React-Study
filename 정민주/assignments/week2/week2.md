### App.jsx
```js
import React, {useState} from 'react';
import Item from './components/Item.jsx';
import './App.css';

function App() {
  const [Items, setItems] = useState([["서울우유", 1000, 5]])
  const [text, setText] = useState("")
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  return (
    <>
      <div class="shoppingList">
        <h1 class="title">Shopping List</h1>
        {Items.map(item => <Item name={item[0]} price={item[1]} quantity={item[2]}></Item>)}
        <div>
          <input type="text" onChange={(e)=>{
            setText(e.target.value)
          }} autoFocus/>
          <input type="number" onChange={(e)=>{
            setPrice(e.target.value)
          }}/>
          <input type="number" onChange={(e)=>{
            setQuantity(e.target.value)
          }}/>
          <button onClick={()=>{
            setItems(prev=>[...prev, [text, price, quantity]])
            setText("")
            setPrice("")
            setQuantity("")
          }}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default App;
```

### App.css
```css
*{
  margin:0;
  padding:0;
}
.shoppingList{
  margin-left: 5vw;
}
.title{
  margin-top: 5vh;
  margin-bottom: 2vh;
}
```

### Item.jsx
```js
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
```

### Item.css
```css
.item{
    display: flex;
    justify-content: space-between;
    width: 300px;
}
.explanation{
    display: inline-block;
  }
.button{
    display: inline-block;
    margin-left: 5px;
    width: 15px;
}
.buttonDiv{
    display: inline-block;
}
```