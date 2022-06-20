import './OrderData.css'

function OrderData ({data, createOrder}) {

    return (
        <div className="OrderData">
            <p>{data.buyer.FirstName} {data.buyer.LastName}</p>
            <p>{data.buyer.MobileNumber}</p>
            <p>{data.buyer.Email}</p>
            <p>Total = {data.total}</p>
            <button className='RealizarOrden' onClick={() => createOrder()}>Realizar Orden</button>
        </div>
    )
}

export default OrderData