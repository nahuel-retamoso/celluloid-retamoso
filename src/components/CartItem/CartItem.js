import { useContext } from "react";
import  CartContext  from '../CartContext/CartContext'
import './CartItem.css'

function CartItem ({ name, cant, id}) {

    const { deleteItem } = useContext(CartContext)

    return (
        <div className="ItemCart">
            <p>{name}</p>
            <p>Cantidad = {cant}</p>
            <button className='delete'onClick={() => deleteItem(id)}>X</button>
        </div>
    )
}

export default CartItem;