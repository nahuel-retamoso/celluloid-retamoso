import React, { useState } from 'react';
import './ItemCount.css'
import Button from '../Button/Button';

function ItemCount ({stock, onAdd}) {

    const [count, setCount] = useState(1)

    const decrement = () => {
        if (count > 0)
            setCount ( count - 1)
    }

    const increment = () => {
        if ( count < stock)
            setCount ( count + 1)
    }

    return (
        <div className="ItemCount">
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