import Item from "../Item/Item";
import './ItemList.css'

function ItemList (props) {

    return (
        <div className="ItemList">
            { props.products.map(products => <Item key={products.id} id={products.id} title={products.name} price={products.price} pictureurl={products.img} />)}
        </div>
    );
}

export default ItemList;