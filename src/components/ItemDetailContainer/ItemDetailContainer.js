import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { getProduct } from '../../services/firebase/firestore'

function ItemDetailContainer () {

    const product = useParams()

    const [detail, setDetail] = useState ([])

    useEffect(() => {
        
        getProduct(product).then(response => {
            setDetail(response)
        })

    }, [])

    return (
        <div className="ItemDetailContainer" >
            {detail.length === 0 && <div className="lds-facebook"><div></div><div></div><div></div></div>}
            {detail.length !== 0 && <ItemDetail {...detail}/>}
        </div>
    )
}

export default ItemDetailContainer;