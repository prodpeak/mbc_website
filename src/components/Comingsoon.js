import React from 'react'
import mintcomingsoon from '../assets/mintcomingsoon.png'
import Marquee1 from './Marquee1'
import Marquee2 from './Marquee2'
import Marquee3 from './Marquee3'

function Comingsoon() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={mintcomingsoon} alt="mintcomingsoon" className='w-8/12 my-5' />
            <Marquee1 />
            <Marquee2 />
            <Marquee3 />

        </div>
    )
}

export default Comingsoon