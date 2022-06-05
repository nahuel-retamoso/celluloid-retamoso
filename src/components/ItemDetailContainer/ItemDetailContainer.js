import Products from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import './ItemDetailContainer.css'

function ItemDetailContainer () {

    const product = useParams()

    function getItem () {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(Products[product.id]);
            }, 2000)
        })
    }

    const [detail, setDetail] = useState ([])

    useEffect(() => {
        getItem().then(item => {
            setDetail(item);
        })
    }, [])

    const [ show, setShow ] = useState('')

    function onAdd () {
        console.log('agregue al carrito');
        setShow('hide')
    }

    const [count, setCount] = useState(0)

    return (
        <div className="ItemDetailContainer" >
            <ItemDetail {...detail}/>
            {show === 'hide' ? false : <ItemCount set = {setCount} count = {count} stock = '5' onAdd = {onAdd}/>}
            {show === 'hide' && <Link className='terminar' to='/empty'>Terminar compra</Link>}
        </div>
    )
}

export default ItemDetailContainer;