import React, { useState } from 'react';
import './ItemCount.css'
import Button from '../Button/Button';

function ItemCount ({stock, onAdd, cartQuantity, initial}) {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 1)
            setCount ( count - 1)
    }

    const increment = () => {
        if ( count < stock)
            setCount ( count + 1)
    }

    return (
        <div className="ItemCount">
            {cartQuantity > 0 && <h1 className='itemCartQuantity'>Tienes en el carrito: {cartQuantity}</h1>}
            <div className='Controls'>
                <Button Click={ decrement }>-</Button>
                <p className='Display'>{count}</p>
                <Button Click={ increment }>+</Button>
            </div>
            <button className='Agregar' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;