import React from 'react'
import mbcvs from '../assets/mbcvs.webp'

import pyrate1 from '../assets/pyrate1.jpg'
import pyrate2 from '../assets/pyrate2.jpg'
import pyrate3 from '../assets/pyrate3.jpg'
import mbcvideo11 from '../assets/mbcvideo11.MP4'
import mbcwinner from '../assets/mbcwinner.jpg'

import gmevideo1 from '../assets/gmevideo1.mp4'
import gmevideo2 from '../assets/gmevideo2.mp4'
import gmevideo3 from '../assets/gmevideo3.mp4'

import hodi2 from '../assets/hodi2.jpg'
import hodivideo from '../assets/hodivideo.mp4'
import hodivideo2 from '../assets/hodivideo2.mp4'

import kolt1 from '../assets/kolt1.jpg'
import kolt2 from '../assets/kolt2.jpg'
import kolt3 from '../assets/kolt3.jpg'
import {CoinFlipButton} from "../buttons/CoinFlipButton";

function Firstvid() {
    return (
        <div className='flex flex-col justify-start text-left lg:justify-center items-center mt-20'>

            <h1 className="title text-4xl lg:text-6xl text-gray-200">
                <span className="text-slime-700">Mutant</span> CoinFLip
            </h1>

            <h1 className='text-left lg:text-center text-white lg:text-6xl text-lg lg:mb-5 mt-0 lg:mt-10 px-4 font-normal'>
                Add Mutant CoinFlip to&nbsp;
                <span className='font-extrabold'>Your Telegram Community</span>!
            </h1>

            <div className="rows">
                <div className="lg:row1 flex flex-row justify-center items-center ">
                    <video
                        src={mbcvideo11}
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-full lg:w-1/3 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                    <img src={mbcvs} alt="mbcvs" className='w-1/3 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block' />
                    <img src={mbcwinner} alt="mbcwinner" className='w-1/3 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block' />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/2 lg:w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>Pyrate</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <img src={pyrate2} alt="pyrate2" className='w-1/2 lg:w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <img src={pyrate1} alt="pyrate1" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block' />
                    <img src={pyrate3} alt="pyrate3" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block' />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/2 lg:w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>GME</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <video
                        src={gmevideo2}
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/2 lg:w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                    <video
                        src={gmevideo1}
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block'
                    />
                    <video
                        src={gmevideo3}
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block'
                    />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/2 lg:w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>HODI</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <video
                        src={hodivideo2}
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/2 lg:w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                    <img src={hodi2} alt="hodi2" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block' />
                    <video
                        src={hodivideo}
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block'
                    />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/2 lg:w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>KOLT</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <img src={kolt1} alt="kolt1" className='w-1/2 lg:w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <img src={kolt2} alt="kolt2" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block' />
                    <img src={kolt3} alt="kolt3" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl hidden lg:block' />
                </div>
            </div>

            <span className="p-4">
                <CoinFlipButton />
            </span>
        </div>
    )
}

export default Firstvid