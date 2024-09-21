import React from 'react'
import { NavbarMenu } from '../mockData/Data'
import {MdComputer, MdMenu} from 'react-icons/md';
import {motion} from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu';
import { useState } from 'react-dom';

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
    
    <motion.div
    initial={{ opacity:0}}
    animate={{ opacity:1}}
    transition={{ duration:0.5,delay:0.5}}
    >
        <div className="container flex justify-between items-center py-6">
            {/* logo */}
            <div className="text-2xl flex items-center gap-2 font-bold">
                <MdComputer className="text-3xl text-secondary"/>
                <p>E-Tutor</p>
            </div>
            {/* menu section */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-6">
                    {NavbarMenu.map((menu) => (
                        <li key={menu.id} className="text-lg font-medium">
                            <a href={menu.link} className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3">{menu.title}</a>
                        </li>
                    ))}
                </ul>

            </div>
            {/* cta button section */}
            <div className="hidden lg:block space-x-6">
                <button className="font-semibold">Sign in</button>
                <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">Register</button>
            </div>
            {/* mobile */}
            <div className="lg:hidden " onClick={()=> setIsOpen(!isOpen)}>
                <MdMenu className="text-3xl"/>
            </div>
            
        </div>
    </motion.div>
    {/* mobile sidebar */}
    <ResponsiveMenu isOpen={isOpen}/>
    </>
  )
}

export default Navbar