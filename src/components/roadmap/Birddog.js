import React from 'react'
import birddog from '../../assets/birddog.webp'

const Birddog = () => {
    return (
        <div className="flex flex-col lg:flex-row birddogbg w-full items-center pb-4 lg:pb-0">
            <div className="order-1 lg:order-1 w-full lg:w-1/2 self-end">
                <img src={birddog} alt="Birddog" className='w-full'/>
            </div>

            <div className="order-2 px-4 lg:px-12 py-0 lg:py-4 lg:pl-12 w-full lg:w-1/2 h-full">
                <div className="border border-gray-200 rounded-lg px-4 py-4 bg-gray-200 bg-opacity-10 w-full">
                    <h1 className="title text-gray-200 p-10 text-4xl lg:text-8xl">2026 Roadmap Coming Soon...</h1>
                </div>
            </div>
        </div>
    )
}

export default Birddog