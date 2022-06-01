import { Link } from 'react-router-dom';
import './Item.css';

function Item ({ id, title, price, pictureurl}) {
    return (
        <div className="Item">
            <h1>{title}</h1>
            <p>{price}</p>
            <img alt="itemImage" src= {pictureurl} />
            <Link className='detalle-button' to={`/item/${id}`}>Detalle</Link>
        </div>
    )
}

export default Item;