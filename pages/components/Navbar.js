import React from "react";
//import {Link} from 'react-router';
import {Transition} from "@headlessui/react"; //smooth transition betweeb tabs
import {Link} from "react-scroll"; //alternate for a tag. In Next Js we use link or ref

function Navbar() {
        return(
            <div>
                {/* for main nav container */}
                <nav className="bg-white shadow-md floating w-full z-10">
                   <div className="w-full">
                       <div className="flex items-center h-20 w-full">
                           {/* first block section outer part */}
                           <div className="flex item items-center h-20 w-full">
                                <div className="flex justify-center items-center flex-shrink-0">
                                    <a className="pl-10 font-bold text-xl cursor-pointer">
                                        IF<span className="text-blue-500"></span>
                                    </a>
                                </div>    
                                <div className="hidden md:block">
                                    <div className="font-serif pt-10 m1-10 pb-10 flex items-baseline space-x-4">
                                        <Link 
                                            activeClass="about" 
                                            to="about" 
                                            smooth={true}
                                            offset={50} 
                                            duration={500}
                                            className="cursor-pointer px-3 py-2 text-md hover:font-black"
                                        >
                                            about
                                        </Link>
                                        <Link 
                                            activeClass="works" 
                                            to="works" 
                                            smooth={true}
                                            offset={50} 
                                            duration={500}
                                            className="cursor-pointer px-3 py-2 text-md hover:font-black"
                                        >
                                            works
                                        </Link>
                                        <Link 
                                            activeClass="shop" 
                                            to="shop" 
                                            smooth={true}
                                            offset={50} 
                                            duration={500}
                                            className="cursor-pointer px-3 py-2 text-md hover:font-black"
                                        >
                                            shop
                                        </Link>
                                        <Link 
                                            activeClass="exhibition" 
                                            to="ex" 
                                            smooth={true}
                                            offset={50} 
                                            duration={500}
                                            className="cursor-pointer px-3 py-2 text-md hover:font-black"
                                        >
                                            exhibition
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex item items-center mx-20 justify-between w-full">
                                <div className="flex justify-center items-center flex-shrink-0">
                                </div>    
                                <div className="hidden md:block">
                                    <div className="font-serif pt-10 m1-10 pb-10 flex items-baseline space-x-4">
                                        {/* <Link 
                                            activeClass="about" 
                                            to="about" 
                                            smooth={true}
                                            offset={50} 
                                            duration={500}
                                            className="cursor-pointer px-3 py-2 text-md hover:font-black"
                                        > */}
                                        <a class="instagram__button" href="https://www.instagram.com/ifrzky__/">
                                            <img className="w-[28px]" src="../images/ig.png"/>
                                        </a>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </nav>
            </div>
        )
}

export default Navbar