import {addToDb, getShoppingCart} from "./../../assets/utilities/fakedb"
const Summary = ({cart}) => {
    return (
        <>
            <h2 className='text-[25px] text-center'>Order Summary</h2>
            <p>Selected Items: {cart.length ? cart.length : 0}</p>
            <addToDb/>
        </>
    );
};

export default Summary;