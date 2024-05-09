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
