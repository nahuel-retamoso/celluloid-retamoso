import { getProducts } from "../../AsyncMock";
import Item from "../Item/Item";
import { useState, useEffect } from 'react';
import './ItemList.css'

function ItemList () {
    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div className="ItemList">
            { products.map(products => <Item key={products.id} title={products.name} price={products.price} pictureurl={products.img} />)}
        </div>
    );
}

export default ItemList;