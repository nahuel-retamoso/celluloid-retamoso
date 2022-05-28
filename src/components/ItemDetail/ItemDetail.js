import './ItemDetail.css';

function ItemDetail (props) {
    console.log(props)
    return (
        <div className="ItemDetail" >
            <h1 className="ItemName">{props.name}</h1>
            <img className="ItemImg" alt="Item" src={props.img}/>
            <h3 className="Price">Precio ${props.price}</h3>
            <p className="Description">{props.description}</p>

        </div>
    )
}

export default ItemDetail;