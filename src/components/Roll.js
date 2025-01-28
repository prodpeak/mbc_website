import React from 'react'
import Marquee5 from './Marquee5'
import monsters from '../assets/monsters.webp'

function Roll() {
    return (
        <>
            <div className='flex flex-col w-full justify-center items-center px-4s my-20 overflow-y-clip lg:py-40 py-10'>
                <img src={monsters} alt="monsters" className='w-full -rotate-6' />
                <div className="marq -rotate-6">
                    <Marquee5 />
                </div>

            </div>
        </>
    )
}

export default Roll