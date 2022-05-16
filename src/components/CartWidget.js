import './CartWidget.css';
import cart from './shopping-cart.png';

function CartWidget () {
    return (
        <div className='Widget'>
            <img src={cart} className='CartImage' alt='Cart'/>
            <h1 className='Contador'>0</h1>
        </div>
    )
}

export default CartWidget;