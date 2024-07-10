import React from 'react';
import Book from './components/Book';
import { useState } from 'react';
import './App.css';

export default function AppBook() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev+1);
    const handleMinusClick = () => {
        if(count>0){
            setCount((prev)=>prev-1);
        }
    }

    // minusbutton일때 prev-1

    return (
        <>
        <h1>Book List</h1>
        <div className='container'>
            <div className="banner">Total Page Count: {count} </div>
            <div className='booklist'>
                <Book 
                    total={count}
                    image = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title = 'milk and honey'
                    author ='rupi kaur'
                    onClick = {handleClick}
                    onMinusClick = {handleMinusClick}
                 />
            </div>
        </div>
        <div className='container'>
            <div className='booklist'>
                <Book 
                    total={count}
                    image = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title = 'How Innovation Works'
                    author ='Matt Ridley'
                    onClick = {handleClick}
                    onMinusClick = {handleMinusClick}
                 />
            </div>
        </div>
        </>
       
    );
}

