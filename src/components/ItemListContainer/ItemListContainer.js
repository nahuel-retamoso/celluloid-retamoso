import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore'


function ItemListContainer (props) {

    const category = useParams()

    const [products, setProducts] = useState([])

    const [ load, setLoad ] = useState(true)


    useEffect(() => {

        setLoad(true)
        getProducts(category).then(response => {
            setProducts(response)
            setLoad(false)
        }).catch(error => {
            console.log(error)
        })
        
    }, [category])


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