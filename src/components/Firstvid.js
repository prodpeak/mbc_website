import React from 'react'
import coinflipbot from '../assets/coinflipbot.png'
import mbcvs from '../assets/mbcvs.jpg'

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

function Firstvid() {
    return (
        <div className='flex flex-col justify-center items-center px-4s my-20'>

            <h1 className='text-center text-white lg:text-6xl text-2xl mb-5 mt-10 px-4 font-normal'>Add Mutant Coinflip to<br /> <span className='font-extrabold'>Your Telegram Community</span>
            </h1>

            <div className="rows">
                <div className="row1 flex flex-row justify-center items-center ">
                    <video
                        src={mbcvideo11}
                        alt="mbcvideo1"
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/3 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                    <img src={mbcvs} alt="mbcvs" className='w-1/3 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <img src={mbcwinner} alt="mbcwinner" className='w-1/3 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>Pyrate</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <img src={pyrate2} alt="pyrate2" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <img src={pyrate1} alt="pyrate1" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <img src={pyrate3} alt="pyrate3" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>GME</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <video
                        src={gmevideo2}
                        alt="gmevideo2"
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                    <video
                        src={gmevideo1}
                        alt="gmevideo1"
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                    <video
                        src={gmevideo3}
                        alt="gmevideo3"
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>HODI</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <video
                        src={hodivideo2}
                        alt="hodivideo2"
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                    <img src={hodi2} alt="hodi2" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <video
                        src={hodivideo}
                        alt="hodivideo"
                        muted
                        autoPlay
                        loop
                        playsInline
                        webkit-playsinline="true"
                        controls={false}
                        className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl'
                    />
                </div>

                <div className="row2 flex flex-row justify-center items-center ">
                    <div className='flex flex-col justify-center items-center relative w-1/4 lg:m-5 m-2 lg:rounded-[50px] rounded-xl lg:border-2 border-[1px] border-white' >
                        <p className='text-white text-center text-sm lg:text-2xl  absolute'>KOLT</p>
                        <img src={mbcvs} alt="mbcvs" className='w-full opacity-0' />
                    </div>
                    <img src={kolt1} alt="kolt1" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <img src={kolt2} alt="kolt2" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                    <img src={kolt3} alt="kolt3" className='w-1/4 lg:p-5 p-2 lg:rounded-[50px] rounded-xl' />
                </div>




            </div>




            <a href="https://t.me/MutantCoinFlipBot?start=new" target="_blank" rel="noopener noreferrer">
                <img src={coinflipbot} alt="coinflipbot" className='w-40' />
            </a>
        </div>
    )
}

export default Firstvid