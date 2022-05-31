import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../navbar/Navbar.css';
import RoundedInput from '../../BaseComponents/RoundedInput';
import StandartButton from '../../BaseComponents/StandartButton';

export const Navbar=({
    image,
    name,
    nofify_count
    })=>{

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
  

    return(
        <div className=' sm:mb-80 lg:mb-0 xl:mb-0' id='navbar'>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
                <nav className="navbar" onClick={e => e.stopPropagation()}>
                    <div className="nav-container flex justify-evenly bg-white">
                        {/* Navbar Logo */}
                        <div className=" flex w-1/3 image-div">
                            <img src='img/Logo2.png' alt='Logo' className=' w-24'/>
                            <span className='servicename leading-7 mt-3'><div>Sithum Sago</div><div>Delivery</div></span>
                        </div>


                        {/* Name */}
                        <div className='text-center  admin-text-div bg-white sm:w-full sm:mb-11 xl:w-full'>
                            <h1 className=' text-rebornit-primary font-bold'>Admin Panel</h1>
                        </div>


                        {/* Nav Items */}
                        <div className="flex search-bar bg-white sm:w-4/5 sm:p-7 lg:w-4/6 xl:w-2/4">
                            <RoundedInput type="text" placeholder="Delivery Code...." extraTailwindClasses={"outline outline-2 outline-rebornit-primary w-full mr-1"} />
                            <span>
                                <StandartButton children={"Search"} extraTailwindClasses={"w-18 p-2 bg-rebornit-primary"}/>
                            </span>
                        </div>
                

                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>

                    </div>
                </nav>
            </ div>
    )
}