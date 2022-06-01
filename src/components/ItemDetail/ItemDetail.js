import './ItemDetail.css';

function ItemDetail (props) {
    return (
        <div className="ItemDetail" >
            <div className='Data'>
                <h1 className="ItemName">{props.name}</h1>
                <h3 className="Price">Precio ${props.price}</h3>
                <p className="Description">{props.description}</p>
            </div>
            <img className="ItemImg" alt="Item" src={props.img}/>
        </div>
    )
}

export default ItemDetail;