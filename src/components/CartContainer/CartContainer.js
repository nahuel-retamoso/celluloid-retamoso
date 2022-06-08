import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import  CartContext  from '../CartContext/CartContext'

function CartContainer () {

    const { cart, deleteItem } = useContext(CartContext)

    return (
        <div className="CartContainer">
            
            <h1>Cart</h1>
            {cart.map(products => {<CartItem key={products.id} name={products.name} cant = {products.quantity} delete = {deleteItem(products.id)} />})}
        </div>
    )
}

export default CartContainer;