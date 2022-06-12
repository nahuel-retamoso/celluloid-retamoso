import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import  CartContext  from '../CartContext/CartContext'
import './CartContainer.css'

function CartContainer () {

    const { cart, deleteCart } = useContext(CartContext)

    return (
        <div className="CartContainer">
            {cart.map(products => <CartItem key={products.id} id = {products.id}name={products.name} cant = {products.parentcount}/>)}
            {!cart.length ? <h1>Tu carrito esta vacio</h1> : <button onClick={() => deleteCart()} className="deleteAll">Delete all</button>}
        </div>
    )
}

export default CartContainer;