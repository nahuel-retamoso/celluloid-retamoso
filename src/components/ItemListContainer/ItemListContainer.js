import './ItemListContainer.css';

function ItemListContainer (props) {
    return (
        <div className="Item">
            <h1>
            {props.greeting}
            </h1>
        </div>
    )
}

export default ItemListContainer;