import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import  CartContext  from '../CartContext/CartContext';

function ItemDetail ({id, name, price, description, img}) {

    const { AddItem, getItem } = useContext(CartContext)

    const [ parentcount, setParentcount ] = useState(0)


    const OnAdd = (parentcount) => {
            setParentcount(parentcount);
            AddItem({id, name, price, parentcount})
    }

    return (
        <div className="ItemDetail" >
            <div className='Data'>
                <h1 className="ItemName">{name}</h1>
                <h3 className="Price">Precio ${price}</h3>
                <p className="Description">{description}</p>
            </div>
            <img className="ItemImg" alt="Item" src={img}/>
            {parentcount > 0 ? <div className='continuar'><Link className='terminar' to='/cart'>Terminar compra</Link> <Link className='seguirComprando' to='/' >Seguir comprando</Link> </div> : <ItemCount stock = '5' onAdd = {OnAdd} initial = {getItem(id)?.parentcount} />}
        </div>

    )
}

export default ItemDetail;