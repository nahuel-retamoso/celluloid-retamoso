import Products from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
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

    return (
        <div className="ItemDetailContainer" >
            <ItemDetail {...detail}/>
        </div>
    )
}

export default ItemDetailContainer;