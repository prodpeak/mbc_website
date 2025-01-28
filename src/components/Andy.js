import React from 'react'
import jointelegram from '../assets/jointelegram.png'


import andytext from '../assets/andytext.png'
import andy from '../assets/andy2.gif'
// import andy from '../assets/andy.gif' 

function Andy() {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-center items-center andybg px-4 py-5 lg:py-0'>

            <div className="right flex flex-col lg:justify-start justify-center items-center lg:items-start lg:w-1/2 lg:px-32">
                <img src={andytext} alt="andytext" className='w-80' />

                <h2 className='text-md text-white text-start  font-extralight mb-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, leo id tristique sagittis, lectus orci mollis velit, eget condimentum augue erat quis risus. Nullam ultrices metus quam, eget vehicula ligula commodo a. Nullam malesuada nisl nec feugiat fringilla.
                    <br />
                    <br />
                    Aliquam a sem vel lectus interdum posuere ut vitae felis. Nullam neque nibh, accumsan vel libero vestibulum, accumsan porttitor nisl. Donec dictum, nibh sed euismod mollis, arcu tortor pharetra quam, non ornare neque dui at elit. Morbi id neque urna.
                    <br />
                    <br />
                    Nunc imperdiet eget est eget vulputate. Donec auctor id libero et bibendum. Vestibulum ac elit porta nulla tempus laoreet. Aenean placerat
                </h2>

                <a href="https://t.me/MutantBoysClub_MBC" target="_blank" rel="noreferrer">
                    <img src={jointelegram} alt="jointelegram" className='w-40' />
                </a>
            </div>

            <div className="left lg:w-1/2 flex flex-col lg:justify-end justify-center items-center lg:items-end">
                <img src={andy} alt="andy" className='w-9/12 lg:w-11/12 lg:ml-20 m-4 lg:mb-0' />
                {/* <Andyanimation /> */}
            </div>
        </div>
    )
}

export default Andy