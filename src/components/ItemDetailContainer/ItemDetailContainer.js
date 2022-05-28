import Products from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from 'react';

function ItemDetailContainer () {

    function getItem () {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(Products[0]);
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
            <ItemCount stock = '5' initial = {2}/>
        </div>
    )
}

export default ItemDetailContainer;