function CartItem (props) {

    return (
        <div className="ItemCart">
            <p>{props.name}</p>
            <p>{props.cant}</p>
            <button className='delete'onClick={props.delete}>X</button>
        </div>
    )
}

export default CartItem;