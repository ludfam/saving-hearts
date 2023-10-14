import React from 'react'
import Button from './button'
import MobileNav from './navigation/mobile-nav'
import { navlinks } from '@/utils/data'

const Navbar = () => {

   

    return (
        <div className='w-full h-20 shadow-md flex items-center px-20 justify-between font-raleway'>
            <h1 className='text-4xl font-bold'>Logo</h1>
            <ul className='lg:flex gap-16 hidden  font-semibold text-sm '>

                {
                    navlinks.map((link) => (

                        <li className='hover:font-semibold cursor-pointer hover:transition duration-150 ease-in-out hover:scale-105'>{link.link}</li>
                    ))
                }
            </ul>
            <div className='hidden lg:flex'>

            <Button
                title="Get In Touch" />
            </div>
                <MobileNav />
        </div>
    )
}

export default Navbar