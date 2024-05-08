import React from 'react';
import { useState, useEffect } from 'react';

export default function Products() {
    const [Products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev =>!prev);


    useEffect(()=>{
        fetch(`data/${checked ? 'sale_':''}products.json`)
        .then((res)=>res.json())
        .then((data) => {
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴')
            setProducts(data);
        });
        return ()=>{
            console.log('🧹 깨끗하게 청소하는 일들을 합니다.')
        };
    }, [checked]);

    return (
        <div>
        <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
        <label htmlFor='checkbox'>Show Only 🔥 Sale </label>
            <ul>
                {Products.map((products) => (
                    <li key={products.id}>
                        <article>
                            <h3>{products.name}</h3>
                            <p>{products.price}</p>
                        </article>
                    </li>
                ))}</ul>  
        </div>
    );
}

