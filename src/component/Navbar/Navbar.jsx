import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const toggleBtn = useRef();
    const menu = useRef();

    const toggleMenu = () => {
        menu.current.classList.toggle("hidden")
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='container-fluid bg-[#E5E5E5]'>
            <header className='bg-[#E5E5E5]'>
                <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg">
                    <div>
                        <a href="#" className='font-bold text-[#ED712E]'>
                            Read.
                        </a>
                    </div>
                    <div className='flex gap-2 md:hidden'>
                        <button id='menu-button' className='' ref={toggleBtn} onClick={toggleMenu}>
                            <FaBars size={28} />
                        </button>

                        <div className=' bg-[#ED712E] rounded'>
                            <button className='bg-[#ED712E] rounded px-2' data-te-toggle="modal">
                                <a className="md:p-4 py-2 block text-white" href="#" >Sign In</a>
                            </button>
                        </div>
                    </div>


                    <div className="hidden w-full md:flex md:items-center gap-1 md:w-auto grow mx-6" id="menu" ref={menu}>
                        <ul className="pt-4 md:flex md:justify-between md:text-[0.7rem] text-2xl md:pt-0">
                            <li>
                                <a className="sm:p-2 py-1 block hover:text-[#f17a3a]" href="#" >Free Ebooks</a >
                            </li>
                            <li>
                                <a className="sm:p-2 py-1 block hover:text-[#f17a3a]" href="#" >24/7 Homework help</a >
                            </li>
                            <li>
                                <a className="sm:p-2 py-1 block hover:text-[#f17a3a]" href="#" >24/7 Free college counselling service</a >
                            </li>
                            <li>
                                <a className="sm:p-2 py-1 block hover:text-[#f17a3a]" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* small screen navbar */}
                    <div className="hidden w-full md:items-center md:w-auto text-start" id="menu" ref={menu}>
                        <ul className="pt-4 text-base text-gray-700 font-bold md:flex md:justify-between  md:pt-0">
                            <li>
                                <a className="md:p-4 py-1 block hover:text-[#f17a3a]" href="#" >Free Ebooks</a >
                            </li>
                            <li>
                                <a className="md:p-4 py-1 block hover:text-[#f17a3a]" href="#" >24/7 Homework help</a >
                            </li>
                            <li>
                                <a className="md:p-4 py-1 block hover:text-[#f17a3a]" href="#" >24/7 Free college counselling service</a >
                            </li>
                            <li>
                                <a className="md:p-4 py-1 block hover:text-[#f17a3a]" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className='hidden md:block my-2 rounded'>
                        <button className='bg-[#ED712E] rounded px-2' onClick={toggleModal}>
                            <a className="md:p-2 py-2 block  text-white font-medium" href="#" >Sign In</a>
                        </button>
                    </div>
                    {isOpen && (
                        <div className="fixed z-20 inset-0 overflow-y-auto">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="fixed inset-0 transition-opacity"
                                    aria-hidden="true"
                                >
                                    <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                                </div>

                                <span
                                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                    aria-hidden="true"
                                ></span>

                                <div
                                    className="inline-block align-bottom bg-[#ED712E] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3
                                                className="text-lg leading-6 text-center text-white font-bold "
                                                id="modal-headline"
                                            >
                                                Login Page
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-md text-white">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, aut. Delectus assumenda eveniet ducimus beatae non quidem amet atque blanditiis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#ffa3a] text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={toggleModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </nav>
            </header>


            {/* <div className='grid grid-cols-12'>

                <div className='col-span'>Read</div>
                <div className='col-span'>
                    <ul>
                        <li>Free Ebooks</li>
                        <li>24/7 Homework help</li>
                        <li>24/7 Free college counselling service</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div className='col-span'>
                    <button>Sign In</button>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar