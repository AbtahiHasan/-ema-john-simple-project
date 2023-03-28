import { useState, useEffect } from 'react';
import { addToDb } from "./../utilities/fakedb";
import Header from '../components/body/Header';
import Product from '../components/body/Products'
import Summary from '../components/body/Summary';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const getProducts = async () => {
        const res = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
        const data = await res.json();
        setProducts(data)
    }
    useEffect(() => {
        getProducts()
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product]
            setCart(newCart)
            addToDb(product.id)
    }

    return (
        <>
            <Header/>
             <main className='grid md:grid-cols-4 max-w-[1240px] mx-auto mt-[80px]'>
                <div className="col-span-3">
                    <div className='grid md:grid-cols-3 gap-5 mt-5 mx-3'>
                        {
                            products.map(product => {
                                return (
                                    <Product key={product.id} addToCart={addToCart} product={product}></Product>
                                    )
                            })
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <Summary cart={cart}/>
                </div>
            </main>
        </>
       
    );
};

export default Shop;