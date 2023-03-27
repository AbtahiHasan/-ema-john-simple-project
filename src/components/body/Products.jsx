import { BiCartAdd } from "react-icons/bi";
const Product = ({product}) => {
    console.log(product)
    const {img, name, price, seller, ratings} = product
    return (
        <article className="border rounded-lg p-3 relative">
            <img src={img} alt="" />
            <div className="p-3">
                <h2 className="text-[21px]">{name}</h2>
                <p className="text-[17px]">Price: ${price}</p>
                <p className="text-[12px]">Manufacturer : {seller}</p>
                <p>Rating: {ratings}</p>
                <button className="border bg-[#FFE0B3] w-full absolute bottom-0 left-0 right-0 rounded-b-lg">Add to Cart <BiCartAdd/></button>
            </div>            
        </article>
    );
};

export default Product;