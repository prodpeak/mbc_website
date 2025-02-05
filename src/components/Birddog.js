import React from 'react'
import birddogtext from '../assets/birddogtext.png'
import birddog from '../assets/birddog.gif'

function Birddog() {
    return (
        <div
            className='flex lg:flex-row flex-col justify-center items-center birddogbg px-4 py-5 lg:py-0 z-50 overflow-clip'>

            <div className="left lg:w-1/2 flex flex-col lg:justify-end justify-center items-center lg:items-end">
                <img src={birddog} alt="birddog" className='w-12/12 lg:w-11/12 lg:ml-20 m-4 lg:mb-0'/>
                {/* <Birddoganimation /> */}
            </div>

            <div
                className="right flex flex-col lg:justify-start justify-center items-center lg:items-start lg:w-1/2 lg:pr-20 lg:pl-10">
                <div className="border border-gray-200 rounded-lg px-10 py-4 bg-gray-200 bg-opacity-20 m-10 w-full">
                    <img src={birddogtext} alt="birddogtext" className='w-80'/>
                </div>
            </div>
        </div>
    )
}

export default Birddog