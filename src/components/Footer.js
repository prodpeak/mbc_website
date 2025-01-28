import React from 'react'
import footerlogo from '../assets/footerlogo.png'

function Footer() {
    return (
        <div className='bg-black flex lg:flex-row flex-col justify-around items-center px-10 lg:py-20 py-5'>
            <img src={footerlogo} alt="footerlogo" className='w-[500px]' />
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-white text-2xl font-extralight'>Contact Us</h2>
                <h2 className='text-white text-2xl font-bold'>team@mutantboysclub.com</h2>

            </div>
        </div>
    )
}

export default Footer