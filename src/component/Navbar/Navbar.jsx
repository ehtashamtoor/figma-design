import React, { useRef } from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const mobileNav = useRef(null);

    const openNav = () => {
        mobileNav.current.classList.toggle("hidden")
    }

    return (
        <div>
            <nav className="bg-[#f1f1f1] flex flex-wrap items-center justify-between w-full py-4 md:py-0 lg:px-7 md:px-2 px-2">
                <div>
                    <a href="#" className='font-extrabold text-secondary text-2xl'>
                        Read.
                    </a>
                </div>
                <div className='flex gap-2 md:hidden'>
                    <button id='menu-button' onClick={openNav}>
                        <FaBars size={28} />
                    </button>

                    <div className=' bg-secondary rounded'>
                        <button className='bg-secondary rounded px-[23px] py-[13px]'>
                            <a className="block text-[#ffffff] text-[17px] font-bold" href="#">Sign In</a>
                        </button>
                    </div>
                </div>

                <div className="hidden w-full md:flex md:items-center md:w-auto grow lg:ms-16 md:ms-3" >
                    <ul className="md:pt-0 pt-4 md:flex md:justify-between lg:gap-3 md:gap-0 text-[#201F1E]">
                        <li>
                            <a className="sm:p-2 py-1 block hover:text-[#f17a3a] text-[15px] md:text-sm  " href="#" >Free Ebooks</a >
                        </li>
                        <li>
                            <a className="sm:p-2 py-1 block hover:text-[#f17a3a] text-[15px] md:text-sm  " href="#" >24/7 Homework help</a >
                        </li>
                        <li>
                            <a className="sm:p-2 py-1 block hover:text-[#f17a3a] text-[15px] md:text-sm  " href="#" >24/7 Free college counselling service</a >
                        </li>
                        <li>
                            <a className="sm:p-2 py-1 block hover:text-[#f17a3a] text-[15px] md:text-sm  " href="#">About Us</a>
                        </li>
                    </ul>
                </div>

                {/* small screen navbar */}
                <div className="hidden w-full md:items-center md:w-auto text-start" ref={mobileNav}>
                    <ul className="pt-4 text-[#201F1E] font-semibold md:flex md:justify-between md:pt-0 text-[15px]">
                        <li>
                            <a className="md:p-4 py-1 block hover:text-[#f17a3a]  " href="#" >Free Ebooks</a >
                        </li>
                        <li>
                            <a className="md:p-4 py-1 block hover:text-[#f17a3a]  " href="#" >24/7 Homework help</a >
                        </li>
                        <li>
                            <a className="md:p-4 py-1 block hover:text-[#f17a3a]  " href="#" >24/7 Free college counselling service</a >
                        </li>
                        <li>
                            <a className="md:p-4 py-1 block hover:text-[#f17a3a]  " href="#">About Us</a>
                        </li>
                    </ul>
                </div>

                <div className='hidden md:block my-2 rounded'>
                    {/* it looks good on px-[18px], py-[13px] */}
                    <button className='bg-secondary rounded lg:px-[23px] md:px-[10px] lg:py-[13px] md:py-[8px]'>
                        <a className=" block text-[#ffffff] font-bold lg:text-[17px] md:text-[14px]" href="#" >Sign In</a>
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar