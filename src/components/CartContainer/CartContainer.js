import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import  CartContext  from '../CartContext/CartContext'

function CartContainer () {

    const { cart } = useContext(CartContext)

    return (
        <div className="CartContainer">
            
            <h1>Cart</h1>
            {cart.map(products => <CartItem key={products.id} id = {products.id}name={products.name} cant = {products.parentcount}/>)}
        </div>
    )
}

export default CartContainer;