import React from 'react'
import mutantboosterbtn from '../assets/mutantboosterbtn.webp'
import toplogo from '../assets/toplogo.png'
import jointelegram from '../assets/jointelegram.png'


function Header() {
    return (
        <div className="fixed w-full z-[100]">
            <div className="w-full bg-black flex flex-row justify-between items-center px-10 py-5 text-white mb-4">
                <div className="left flex flex-row justify-center items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={toplogo} alt="toplogo" className='w-72'/>
                    </a>

                </div>

                <div className="right flex flex-row justify-center items-center gap-4">

                <a href="#" target="_blank" rel="noopener noreferrer"
                   className='text-sm font-thin hidden lg:block'>Home</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='text-sm font-thin hidden lg:block'>Contact
                    Us</a>

                <a href="https://booster.mutantboysclub.com/" target="_blank" rel="noopener noreferrer">
                    <img src={mutantboosterbtn} alt="mutantboosterbtn" className='w-40 hidden lg:block'/>
                </a>
                <a href="https://t.me/MutantBoysClub_MBC" target="_blank" rel="noopener noreferrer">
                    <img src={jointelegram} alt="jointelegram" className='w-40 hidden lg:block'/>
                </a>
            </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
    )
}

export default Header