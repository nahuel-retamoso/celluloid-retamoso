import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';


function ItemListContainer (props) {
    return (
        <div className="Item">
            <h1>
            {props.greeting}
            </h1>
            <ItemCount stock = '5' initial = '2'/>
        </div>
    )
}

export default ItemListContainer;