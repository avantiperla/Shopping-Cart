import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Newsletter from './Newsletter';

const Footer = () => {

    return (
        <>
            <Newsletter />


            <div className=' bg-black z-20'>
                <footer className='flex justify-between items-center max-w-6xl mx-auto'>
                    <div className='flex flex-col'>
                        <div className='grid md:grid-cols-4 py-10 gap-10'>
                            <div className='flex flex-col gap-3'>
                                <h1 className=' text-lg text-white font-light'>About Us</h1>
                                <div className='text-white flex flex-col gap-3 text-xs font-extralight'>
                                    <h6>About Us</h6>
                                    <h6>Get In Touch</h6>
                                    <h6>Reviews</h6>
                                    <h6>Press Room</h6>
                                    <h6>Terms Of Use</h6>
                                    <h6>Privacy</h6>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <h1 className='text-lg text-white font-light'>Customer Care</h1>
                                <div className='text-white flex flex-col gap-3 text-xs font-extralight'>
                                    <h6>Contact Us</h6>
                                    <h6>Testimonials</h6>
                                    <h6>Delivery and Returns</h6>
                                    <h6>Alteration Services</h6>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <h1 className=' text-lg text-white font-light'>Shopping With Us</h1>
                                <div className='text-white flex flex-col gap-3 text-xs font-extralight'>
                                    <h6>Size Guide</h6>
                                    <h6>Gift Vouchers</h6>
                                    <h6>VAT Exemption</h6>
                                    <h6>Rewards</h6>
                                    <h6>Order Our Catalogue</h6>
                                    <h6>Become an Affiliate</h6>
                                    <h6>Wholesale</h6>
                                </div>
                            </div>

                            <div className='flex flex-col gap-5 '>
                                <h1 className='text-white text-lg font-light'>Unlock 10% off</h1>
                                <p className='text-white text-xs font-extralight'>Your first order when you sign up to our newsletter</p>

                                <div className='flex flex-col items-start gap-3'>
                                    <input type='email' placeholder='Enter Email' className='w-full py-2 px-4 text-sm focus:outline-none border-2 border-gray-200' required></input>
                                    <button className='bg-yellow-400 text-black px-4 py-2 text-xs'>SIGN UP</button>
                                </div>

                                <div className='flex text-white text-sm gap-3 cursor-pointer '>
                                    <FaTwitter />
                                    <RiFacebookBoxFill />
                                    <FaInstagram />
                                    <FaYoutube />
                                    <FaPinterest />
                                </div>
                            </div>
                        </div>


                        <div className='border-t-2 border-b-2 border-gray-500 py-10 text-gray-500'>
                            <img src="../logo2.png" className="h-20" />
                        </div>

                        <div className='py-4 text-white'>
                            <p>© 2024 Lorem ipsum</p>
                        </div>


                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer