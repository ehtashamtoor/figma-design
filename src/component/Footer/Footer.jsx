import React, { Fragment } from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-10/12 mx-auto md:py-16 p-3'>
            <div className='text-center my-4'>
                <a href="#Home" className='font-extrabold text-[34px] text-secondary'>
                    Read.
                </a>
            </div>

            <div className="w-full mb-10 md:flex md:items-center justify-center gap-1 md:w-auto grow md:mx-6 mx-0">
                <ul className="pt-4 flex flex-wrap justify-center gap-2 md:justify-between text-[15px] text-[#201F1E]   md:pt-0">
                    <li>
                        <a className="sm:p-2 py-1 hover:text-[#f17a3a]" href="#" >Free Ebooks</a >
                    </li>
                    <li>
                        <a className="sm:p-2 py-1 hover:text-[#f17a3a]" href="#" >24/7 Homework help</a >
                    </li>
                    <li className='text-center'>
                        <a className="sm:p-2 py-1 hover:text-[#f17a3a]" href="#" >24/7 Free college counselling service</a >
                    </li>
                    <li>
                        <a className="sm:p-2 py-1 hover:text-[#f17a3a]" href="#">About Us</a>
                    </li>
                </ul>
            </div>
            
            <hr />

            <div className='flex flex-wrap  md:justify-between justify-center px-2 py-4'>

                <span className='text-[15px] my-1 mx-2   text-[#161C2D] text-center'>&copy; &nbsp;Copyright, All Right Reserved</span>

                <div className='flex gap-6 my-1 mx-2'>
                    <FaTwitter className='cursor-pointer text-socialIcons opacity-40 hover:text-[#471bf3]' />
                    <FaFacebookSquare className='text-socialIcons opacity-40 hover:text-[#471bf3] cursor-pointer' />
                    <FaInstagram className='cursor-pointer text-socialIcons opacity-40 hover:text-[#471bf3]' />
                    <BsLinkedin className='cursor-pointer text-socialIcons opacity-40 hover:text-[#471bf3]' />
                </div>
            </div>

        </div>
    )
}

export default Footer