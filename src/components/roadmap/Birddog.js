import React from 'react'
import birddog from '../../assets/birddog.gif'

const Birddog = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-center items-center birddogbg px-4 py-5 lg:py-0'>

            <div className="right flex flex-col lg:justify-start justify-center lg:w-1/2">
                <img src={birddog} alt="birddog" className='w-12/12 lg:w-11/12 lg:ml-20 m-4 lg:mb-0'/>
                {/* <Birddoganimation /> */}
            </div>

            <div
                className="right flex flex-col lg:justify-start justify-center items-center lg:items-start lg:w-1/2 lg:pr-20 lg:pl-10">
                <div className="border border-gray-200 rounded-lg px-10 py-4 bg-gray-200 bg-opacity-20 m-10 w-full">
                    <h1 className="title text-gray-200 p-10 text-8xl">2026 Roadmap Coming Soon...</h1>


                </div>
            </div>
        </div>
    )
}

export default Birddog