import React from 'react'
import toplogo from '../assets/toplogo.png'
import {IconParkOutlineTelegram} from "../icons/IconParkOutlineTelegram";


function Header() {
    return (
        <div className="fixed w-full z-[100]">
            <div className="w-full bg-black flex flex-row justify-center lg:justify-between items-center lg:px-32 py-5 text-white mb-4 border-b-2 border-slime-700">
                <div className="center lg:left flex flex-row justify-center items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={toplogo} alt="toplogo" className='w-72'/>
                    </a>
                </div>

                <div className="hidden lg:right lg:flex flex-row justify-center items-center gap-7">
                    <span className="hidden lg:flex flex-row items-center space-x-4">
                        <a href="https://booster.mutantboysclub.com/" target="_blank" rel="noopener noreferrer">
                            <span className="btn btn-primary">Mutant Booster</span>
                        </a>
                        <a href="https://t.me/MutantBoysClub_MBC" target="_blank" rel="noopener noreferrer">
                            <span className="btn btn-telegram flex flex-row items-center space-x-1">
                                <IconParkOutlineTelegram/> <span>Join Telegram</span>
                            </span>
                        </a>
                    </span>
                </div>
            </div>
            <div className="absolute bottom-[-1px] left-0 w-full h-1/5 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
    )
}

export default Header