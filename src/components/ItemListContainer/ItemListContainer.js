import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import Products from "../../AsyncMock";


function ItemListContainer (props) {

    function getProducts () {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(Products);
            }, 2000)
        }
        )
    }

    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])


    return (
        <div className="ItemListContainer">
            <h1>
            {props.greeting}
            </h1>
            <div className='ItemContainer'>
                <ItemCount stock = '5' initial = {2}/>
                <ItemList products = {products}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer;