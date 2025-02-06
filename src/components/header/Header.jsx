import React, { useState } from 'react';
import { LINKS } from '@/static';
import { NavLink, Link } from "react-router-dom";
import SiteLogo from '@/assets/SiteLogo.svg';
import { BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = ({ backgroundHeader }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style = isOpen ? "auto" : "hidden";
    }

    return (
        <header className={`max-md:static sticky top-0 left-0 bg-white z-50 h-[67px] flex items-center ${backgroundHeader} max-[768px]:flex-col max-[768px]:h-auto`}>
            <div className='header__container'>
                <nav className='flex items-center justify-between gap-10 max-md:items-center max-md:h-16  max-[768px]:gap-1 '>
                    <div className='gap-[120px] flex items-center max-[768px]:flex-col max-[768px]:gap-0'>
                        <div>
                            <NavLink to={"/"}>
                                <img src={SiteLogo} alt="Site Logo" />
                            </NavLink>
                        </div>
                        <ul className={`flex items-center gap-4 max-md:hidden`}>
                            {
                                LINKS.map((item, inx) => (
                                    <li className='text-[#737373] text-sm font-bold hover:text-black' key={inx}>
                                        <NavLink to={item.to}>
                                            {item.link}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-4 text-[#23A6F0] text-sm'>
                        <span className='flex items-center gap-1 font-bold max-[920px]:hidden'><BsPerson /> Login / <span>Register</span></span>
                        <div className='flex gap-8 text-xl'>
                            <CiSearch />
                            <PiShoppingCart />
                            <Link to={"/wishlist"}>
                                <FaRegHeart className='' />
                            </Link>
                            <button onClick={toggleMenu} className='max-[769px]:block hidden'>
                                <HiMiniBars3BottomRight />
                            </button>
                        </div>
                    </div>
                </nav>
                <ul className={`max-[768px]:flex-col max-[768px]:gap-1 ${isOpen ? 'max-[768px]:flex' : 'max-[768px]:hidden '} max-[768px]:flex max-[768px]:text-center hidden  max-[768px]:text-[30px] max-md:mt-10`}>
                    {
                        LINKS.map((item, inx) => (
                            <li className='text-[#737373] text-sm font-bold hover:text-black max-md:text-2xl max-md:font-medium max-md:mb-2' key={inx}>
                                <NavLink to={item.to}>
                                    {item.link}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header;
