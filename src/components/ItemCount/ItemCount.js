import React, { useState } from 'react';
import './ItemCount.css'
import Button from '../Button/Button';

function ItemCount (props) {

    const decrement = () => {
        if (props.count > 0)
            props.set ( props.count - 1)
    }

    const increment = () => {
        if (props.count < props.stock)
            props.set ( props.count + 1)
    }

    return (
        <div className="ItemCount">
            <div className='Controls'>
                <Button Click={ decrement }>-</Button>
                <p className='Display'>{props.count}</p>
                <Button Click={ increment }>+</Button>
            </div>
            <button className='Agregar' onClick={props.onAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;