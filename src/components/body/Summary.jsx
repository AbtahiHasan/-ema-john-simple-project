const Summary = ({cart}) => {
    let totalPrice = 0;
    let shipingPrice = 0;
    let quantity = 0;
    
    for(const product of cart) {
        quantity += product.quantity;
        totalPrice += product.price * quantity;
        shipingPrice += product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shipingPrice + tax;
    return (
        <section className="bg-[#ff99004c] rounded-[8px] p-5 h-[60vh] w-full">
            <h2 className='text-[25px] text-center'>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shipingPrice}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </section>
    );
};

export default Summary;