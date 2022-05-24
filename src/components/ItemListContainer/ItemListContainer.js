import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


function ItemListContainer (props) {
    return (
        <div className="ItemListContainer">
            <h1>
            {props.greeting}
            </h1>
            <div className='ItemContainer'>
                <ItemCount stock = '5' initial = {2}/>
                <ItemList/>
            </div>
            
        </div>
    )
}

export default ItemListContainer;