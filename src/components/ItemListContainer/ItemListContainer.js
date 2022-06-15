import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/index'


function ItemListContainer (props) {

    const category = useParams()

    const [products, setProducts] = useState([])

    const [ load, setLoad ] = useState(true)


    useEffect(() => {

        const collectionRef = category.id  ?
            query(collection(db, 'ItemCollection'), where('type', '==', category.id)) :
            collection(db, 'ItemCollection')

            setLoad(true)
            getDocs(collectionRef).then(
                response => { const products = response.docs.map(doc => { return { id: doc.id, ...doc.data()}})
                setProducts(products)
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