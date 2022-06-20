import Form from "../Form/Form"
import './Checkout.css'
import { useContext, useState } from 'react'
import CartContext from "../CartContext/CartContext"
import OrderData from "../OrderData/OrderData"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'

function Checkout () {

    const { totalValue, cart, deleteCart } = useContext(CartContext)
    const [ buyer, setBuyer ] = useState([])
    const [ order, setOrder ] = useState("")

    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

    const objOrder = {
        buyer: buyer,
        items: cart,
        date: output,
        total: totalValue()
    }


    function createOrder () {
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'ItemCollection')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.parentcount

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                deleteCart()
                console.log('success',`El id de la orden es: ${id}`)
                setOrder(`El id de la orden es: ${id}`)
            }).catch(error => {
                console.log(error)
                setOrder('error',`Algunos productos no tienen stock`)
                console.log("Algunos productos no tienen stock")
            })
        
    }

    return (
        <div className="Checkout" >
            
            {order === "" ?
                <div className="Order">{buyer.length == 0 ? <Form createOrder = {createOrder} setBuyer = {setBuyer} /> : <OrderData data= {objOrder} createOrder= {createOrder}/>}</div>
                : <h1>{order}</h1>
            }

        </div>
    )
}

export default Checkout