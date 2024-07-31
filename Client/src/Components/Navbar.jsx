import React from 'react'
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    // className='flex justify-between items-center h-20 max-w-6xl mx-auto'
    let [open, setOpen] = useState(false);

    return (
        <div className='md:fixed md:inset-x-0 z-20 bg-white'>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
                <NavLink to='/'>
                    <div >
                        <img src="../logo.png" className="h-14" />
                    </div>
                </NavLink>

                <div className={`md:static absolute z-20 bg-gray-100 md:min-h-fit min-h-[55vh] left-0 top-20 md:w-auto w-full flex items-center px-5 ${open ? 'top-20' : 'top-[-100%]'}`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12 '>
                        <li >
                            <NavLink to='/' className='hover:text-gray-500'>Men</NavLink>
                        </li>

                        <li>
                            <NavLink to='/women' className='hover:text-gray-500'>Women</NavLink>
                        </li>

                        <li>
                            <NavLink to='/product' className='hover:text-gray-500'>About Us</NavLink>
                        </li>

                        <li>
                            <NavLink to='/' className='hover:text-gray-500'>Catalog</NavLink>
                        </li>
                    </ul>
                </div>


                <div className='flex items-center gap-6'>
                    <NavLink to='/cart'>
                        <div className='relative'>
                            <FaShoppingCart className='text-2xl' />
                                {/* <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'></span> */}
                        </div>
                    </NavLink>

                    <CgProfile className='text-2xl cursor-pointer'/>

                    <div onClick={() => setOpen(!open)} className='text-2xl cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'} ></ion-icon>
                    </div>
                    
                    
                </div>

                

            </nav>
        </div>
    )
}

export default Navbar