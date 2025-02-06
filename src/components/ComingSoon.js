import React from 'react'
import Marquee1 from './Marquee1'
import Marquee2 from './Marquee2'
import Marquee3 from './Marquee3'

const ComingSoon = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="title text-gray-200 text-4xl lg:text-8xl my-5">NFT Mint coming soon</h1>
            <Marquee1 />
            <Marquee2 />
            <Marquee3 />

        </div>
    )
}

export default ComingSoon;
