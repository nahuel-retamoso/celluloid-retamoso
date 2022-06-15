import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

function ItemDetailContainer () {

    const product = useParams()

    const [detail, setDetail] = useState ([])

    useEffect(() => {

        getDoc(doc(db, 'ItemCollection', product.id)).then(response => {
            const product = { id: response.id, ...response.data()}
            setDetail(product)
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