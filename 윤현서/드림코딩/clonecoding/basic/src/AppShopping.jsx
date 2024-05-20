import React, { useReducer, useState } from 'react';
import cartReducer from './components/reducer/cart-reducer';
import './AppShopping.css';

export default function AppShopping() {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    const handleAdd = () => {
        const category = prompt(`상품 카테고리를 입력하세요`);
        const name = prompt(`상품명을 입력하세요.`);
        const price = parseFloat(prompt(`상품금액을 입력하세요.`));
        const quantity = parseInt(prompt(`상품 수량을 입력하세요.`));
        dispatch({type: 'added', category, name, price, quantity});
    }

    const handleChange = () => {
        const name = prompt(`변경할 삼풍의 이름을 입력하세요`);
        const newPrice = parseFloat(prompt(`변경할 상품의 가격을 입력하세요`));
        const newQuantity = parseInt(prompt(`변경할 상품의 수량을 입력하세요`));
        dispatch({type: 'changed', name, newPrice, newQuantity});
    }

    const handleDelete = () => {
        const name = prompt(`삭제할 상품을 입력하세요`);
        dispatch({type:'deleted', name});
    }

    const handleSort = () => {
        dispatch({type: 'sorted'});
    }
    return (
        <div>
            <h1>Shpping Cart</h1>
            <h3>총금액: {cart.totalPrice}, 총수량: {cart.totalQuantity}</h3>
            <button onClick={handleAdd}>상품 추가하기</button>
            <button onClick={handleChange}>상품 변경하기</button>
            <button onClick={handleDelete}>상품 삭제하기</button>
            <button onClick={handleSort}> 카테고리별 정렬</button>
            <div className='grid-container'>
                {cart.products.map((product)=> (
                    <div key={product.id} className='grid-item'>
                        <p className='category'>&lt;{product.category}&gt;</p>
                        <p>상품명: {product.name} </p>
                        <p>가격: {product.price} </p>
                        <p>수량: {product.quantity} </p>
                    </div>
                ))}
            </div>
        </div>

        
    );
}

const initialCart = {
    products : [
        {
            Id: 1,
            category: 'food',
            name: 'banana',
            price: 0.3,
            quantity: 2
        },
        {
            id: 2,
            category: 'cloth',
            name: 'jeans',
            price: 1.5,
            quantity: 1
        }
        
    ],
    totalPrice: 2.1,
    totalQuantity: 3
};

