import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/Logo.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (        
            <nav className='bg-primary text-white fixed z-50 top-0 left-0 right-0'>                
                <section className='max-w-[1240px] mx-auto flex items-center justify-between p-4'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    {!toggle ? <AiOutlineMenu onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/> : <AiOutlineClose onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/>}
                    
                    <ul className='hidden md:flex gap-5'>
                        <NavLink to="">Home</NavLink>
                        <NavLink to="">Sevices</NavLink>
                        <NavLink to="">Contact</NavLink>
                        <NavLink to="">Tutorial</NavLink>
                        <NavLink to="">About</NavLink>
                    </ul>
                    {/* responsive  */}
                    <ul className={`block duration-300 md:hidden gap-5 fixed top-[68px] ${!toggle ? 'left-[-100%]' : 'left-0'} bg-black w-full h-screen`}>
                        <NavLink to="" className='p-3'>Home</NavLink>
                        <NavLink to="" className='p-3'>Sevices</NavLink>
                        <NavLink to="" className='p-3'>Contact</NavLink>
                        <NavLink to="" className='p-3'>Tutorial</NavLink>
                        <NavLink to="" className='p-3'>About</NavLink>
                    </ul>
                </section>                
            </nav>        
    );
};

export default Header;