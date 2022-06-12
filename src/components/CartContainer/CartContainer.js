import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import  CartContext  from '../CartContext/CartContext'
import './CartContainer.css'

function CartContainer () {

    const { cart, deleteCart, totalValue, itemsValue } = useContext(CartContext)

    return (
        <div className="CartContainer">
            {cart.map(products => <CartItem key={products.id} id = {products.id} name={products.name} cant = {products.parentcount} total = {itemsValue(products.id)}/>)}
            {cart.length > 0 && <h1 className="totalDetail">Total ${totalValue()}</h1>}
            {!cart.length ? <div className="vacio"><h1>Tu carrito esta vacio</h1><Link className='explorar' to='/'>Explorar la tienda</Link></div>: <button className='deleteAll'onClick={() => deleteCart()}><span className="text">Delete all</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>}
        </div>
    )
}

export default CartContainer;