import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <img src="/logo.png" alt="log" className='mx-2 w-10' />
            </div>
            <div className="m-0 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaSquareXTwitter />
            </div>
        </nav>
    )
}

export default Navbar
