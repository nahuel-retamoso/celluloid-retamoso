import Form from "../Form/Form"
import './Checkout.css'
import { useContext, useState } from 'react'
import CartContext from "../CartContext/CartContext"
import OrderData from "../OrderData/OrderData"
import { createOrder }  from '../../services/firebase/firestore'

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

    const createNew = () => {
        
        createOrder(cart, deleteCart, objOrder).then(response => {
            setOrder(response)
        }).catch(error => {
            setOrder(error)
        })
    }

    return (
        <div className="Checkout" >
            
            {order === "" ?
                <div className="Order">{buyer.length === 0 ? <Form setBuyer = {setBuyer} /> : <OrderData data= {objOrder} createOrder= {createNew}/>}</div>
                : <h1>{order}</h1>
            }

        </div>
    )
}

export default Checkout