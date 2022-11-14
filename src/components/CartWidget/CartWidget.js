import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './CartWidget.css';
import cart from './shopping-cart.png';
import CartContext from '../CartContext/CartContext';

function CartWidget () {

    const { widgetNumber } = useContext(CartContext)

    const quantity = widgetNumber()

    return (
        <div className='Widget'>
            <img src={cart} className='CartImage' alt='Cart'/>
            <Link to='/cart'className='Contador'>{quantity}</Link>
        </div>
    )
}

export default CartWidget;