import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-10/12 mx-auto md:py-16 p-3'>
            <div className='text-center my-4'>
                <a href="#Home" className='font-bold text-lg text-[#ED712E]'>
                    Read.
                </a>
            </div>

            <div className="w-full mb-10 md:flex md:items-center justify-center gap-1 md:w-auto grow md:mx-6 mx-0">
                <ul className="pt-4 flex flex-wrap justify-center gap-2 md:justify-between text-[0.8rem] md:pt-0">
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

                <div className='text-sm my-1  mx-2'>&copy; &nbsp;Copyright, All Right Reserved</div>

                <div className='flex gap-2 my-1 mx-2'>
                    <FaTwitter className='hover:text-[#ED712E] cursor-pointer' />
                    <FaFacebookSquare className='hover:text-[#ED712E] cursor-pointer' />
                    <FaInstagram className='hover:text-[#ED712E] cursor-pointer' />
                    <BsLinkedin className='hover:text-[#ED712E] cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default Footer