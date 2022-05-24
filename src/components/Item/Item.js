import './Item.css';

function Item ({ title, price, pictureurl}) {
    return (
        <div className="Item">
            <h1>{title}</h1>
            <p>{price}</p>
            <img alt="itemImage" src= {pictureurl} />
        </div>
    )
}

export default Item;