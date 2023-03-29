import { useState, useEffect } from 'react';
import { addToDb, getShoppingCart } from "./../utilities/fakedb";
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

    useEffect(() => {
        const storedData = getShoppingCart();
        const storedCartArray = [];
            for(const id in storedData) {
                const storedProduct = products.find((product) => {
                    return product.id === id;
                })
                if(storedProduct) {
                    
                    storedCartArray.push(storedProduct)
                }
            }
            setCart(storedCartArray)
        
        
    },[products])

    const addToCart = (product) => {
        let newCart = []
        const exists = cart.find(p => p.id === product.id);
        if(!exists) {
            product.quantity = 1 
            newCart = [...cart, product]
        } else {
            product.quantity += 1
            const remaining = cart.filter(p => p.id !== product.id);
            newCart = [...remaining, exists]
        }
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
                <div className='mt-5 md:fixed top-16 right-[200px]'>
                    <Summary cart={cart}/>
                </div>
            </main>
        </>
       
    );
};

export default Shop;