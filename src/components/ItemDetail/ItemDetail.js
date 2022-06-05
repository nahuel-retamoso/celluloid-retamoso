import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail (props) {

    const [ parentcount, setParentcount ] = useState(0)


    const OnAdd = (parentcount) => {
            setParentcount(parentcount);
            console.log(parentcount)
    }


    return (
        <div className="ItemDetail" >
            <div className='Data'>
                <h1 className="ItemName">{props.name}</h1>
                <h3 className="Price">Precio ${props.price}</h3>
                <p className="Description">{props.description}</p>
            </div>
            <img className="ItemImg" alt="Item" src={props.img}/>
            {parentcount > 0 ? false : <ItemCount stock = '5' onAdd = {OnAdd}/>}
            {parentcount > 0 && <Link className='terminar' to='/empty'>Terminar compra</Link>}
        </div>

    )
}

export default ItemDetail;