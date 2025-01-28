import React from 'react'
import mutantboosterbtn from '../assets/mutantboosterbtn.webp'
import buymbc from '../assets/buymbc.webp'
import part1 from '../assets/part1.png'
import heropic from '../assets/heropic.webp'
import Mutantboosterpart from './Mutantboosterpart'

function Hero() {
    return (
        <div className='flex flex-col justify-center items-center px-0'>
            <h1 className='text-center text-white lg:text-6xl text-5xl mb-5 mt-10 px-4'>Welcome to <br />
                Mutant Boys Club</h1>
            <img src={heropic} alt="heropic" className='w-12/12   rounded-xl ' />
            <h2 className='text-md text-[#9F9F9F] text-center lg:w-[52%] mb-7 px-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, leo id tristique sagittis, lectus orci mollis velit, eget condimentum augue erat quis risus. Nullam ultrices metus quam, eget vehicula ligula commodo a.
            </h2>

            <div className="btns flex lg:flex-row gap-5 px-4 flex-wrap justify-center items-center   ">
                <a href="https://phantom.com/tokens/solana/MBCccZZEbcvWzaHD9otPjmBMFaa6pG7XRYSw39HT5n2?referralId=ch1u9xslfzv" target="_blank" rel="noopener noreferrer">
                    <img src={buymbc} alt="buymbc" className='w-40' />
                </a>
                <a href="https://booster.mutantboysclub.com/" target="_blank" rel="noopener noreferrer">
                    <img src={mutantboosterbtn} alt="mutantboosterbtn" className='w-40' />
                </a>

            </div>

            <div className="booster flex justify-center items-center m-20 w-full ">
                <Mutantboosterpart />
            </div>

            <div className="three flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10 mb-5 px-4">
                <img src={part1} alt="part1" className='w-10/12 lg:w-60 ' />
                <img src={part1} alt="part1" className='w-10/12 lg:w-60 ' />
                <img src={part1} alt="part1" className='w-10/12 lg:w-60 ' />
            </div>

        </div>
    )
}

export default Hero