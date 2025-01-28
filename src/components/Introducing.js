import React from 'react'
import mockup from '../assets/mockup.png'
import mutbost from '../assets/mutbost.png'
import mutantboosterbtn from '../assets/mutantboosterbtn.png'
import buymbc from '../assets/buymbc.png'

function Introducing() {
    return (
        <div className='flex lg:flex-row flex-col justify-center items-center px-4'>
            <div className="left lg:w-1/2">
                <img src={mockup} alt="mockup" className='w-full p-10' />
            </div>

            <div className="right lg:w-1/2 flex flex-col justify-start lg: items-start sitems-center">
                <h2 className='text-center text-white lg:text-5xl text-5xl mb-5 mt-10'>Introducing</h2>
                <img src={mutbost} alt="mutbost" className='w-full lg:w-8/12' />
                <h2 className='text-md text-white text-start   mb-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, leo id tristique sagittis, lectus orci mollis velit, eget condimentum augue erat quis risus. Nullam ultrices metus quam, eget vehicula ligula commodo a. Nullam malesuada nisl nec feugiat fringilla.
                    <br />
                    <br />
                    Aliquam a sem vel lectus interdum posuere ut vitae felis. Nullam neque nibh, accumsan vel libero vestibulum, accumsan porttitor nisl. Donec dictum, nibh sed euismod mollis, arcu tortor pharetra quam, non ornare neque dui at elit. Morbi id neque urna.
                    <br />
                    <br />
                    Nunc imperdiet eget est eget vulputate. Donec auctor id libero et bibendum. Vestibulum ac elit porta nulla tempus laoreet. Aenean placerat
                </h2>

                <div className="btns w-full flex justify-center items-center lg:justify-normal lg:flex-row gap-5  ">
                    <a href="https://phantom.com/tokens/solana/MBCccZZEbcvWzaHD9otPjmBMFaa6pG7XRYSw39HT5n2?referralId=ch1u9xslfzv" target="_blank" rel="noopener noreferrer">
                        <img src={buymbc} alt="buymbc" className='w-40' />
                    </a>
                    <a href="https://booster.mutantboysclub.com/" target="_blank" rel="noopener noreferrer">
                        <img src={mutantboosterbtn} alt="mutantboosterbtn" className='w-40' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Introducing