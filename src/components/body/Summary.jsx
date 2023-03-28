const Summary = ({cart}) => {
    console.log(cart)
    let totalPrice = 0;
    let shipingPrice = 0;

    for(const product of cart) {
        totalPrice += product.price;
        shipingPrice += product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shipingPrice + tax;
    return (
        <>
            <h2 className='text-[25px] text-center'>Order Summary</h2>
            <p>Selected Items: {cart.length ? cart.length : 0}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipingPrice}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </>
    );
};

export default Summary;