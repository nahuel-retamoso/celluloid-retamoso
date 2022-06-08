import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import Products from "../../AsyncMock";
import { useParams } from 'react-router-dom';


function ItemListContainer (props) {

    const category = useParams()

    function getProducts () {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(Products);
            }, 2000)
        }
        )
    }

    function getProductsByCategory () {
        return new Promise ((resolve) =>{
            setTimeout(()=> {
                resolve(Products.filter(prod => prod.type === category.id));
            }, 2000)
        })
    }

    const [products, setProducts] = useState([])

    const [ load, setLoad ] = useState(true)


    useEffect(() => {
        if(!category.id) {
            setLoad(true)
            getProducts().then(response => {
                setProducts(response)
                setLoad(false)
            });
        } else {
            setLoad(true)
            getProductsByCategory().then(response => {
                setProducts(response)
                setLoad(false)
            });
        }
        
    }, [category.id])


    return (
        <div className="ItemListContainer">
            <h1>
            {props.greeting}
            </h1>
            {load === true && <div className="lds-facebook"><div></div><div></div><div></div></div>}
            {load === false && <ItemList products = {products}/>}
        </div>
    )
}

export default ItemListContainer;