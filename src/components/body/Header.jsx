import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/images/Logo.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (        
            <nav className='bg-primary text-white z-50 sticky top-0'>                
                <section className='headerContainer'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {!toggle ? <AiOutlineMenu onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/> : <AiOutlineClose onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/>}
                    
                    <ul className='hidden md:flex gap-5'>
                        <NavLink to="/order">Order</NavLink>
                        <NavLink to="/order-review">Order Review</NavLink>
                        <NavLink to="/manage-inventory">Manage Inventory</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </ul>
                    {/* responsive  */}
                    <ul className={`flex flex-col duration-300 md:hidden gap-5 fixed top-[68px] z-50 ${!toggle ? 'left-[-100%]' : 'left-0'} bg-black w-full h-screen`}>
                        <NavLink className="p-3" to="/order">Order</NavLink>
                        <NavLink className="p-3" to="/order-review">Order Review</NavLink>
                        <NavLink className="p-3" to="/manage-inventory">Manage Inventory</NavLink>
                        <NavLink className="p-3" to="/login">Login</NavLink>
                    </ul>
                </section>                
            </nav>        
    );
};

export default Header;